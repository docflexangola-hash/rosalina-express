"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useBooking } from "@/components/booking/BookingContext";
import { SeatMap } from "@/components/booking/SeatMap";
import { bookingContent } from "@/content/booking";

function useCountUp(value: number, duration = 600) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const startRef = useRef<number | null>(null);
  useEffect(() => {
    fromRef.current = display;
    startRef.current = null;
    let raf = 0;
    const step = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(fromRef.current + (value - fromRef.current) * eased);
      setDisplay(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);
  return display;
}

export function SelecaoAssentos() {
  const router = useRouter();
  const { data, update } = useBooking();
  const { routes, viagem, passenger, baggage, payment, fleetSpecs } = bookingContent;

  const [seat, setSeat] = useState<number | null>(
    data.seat ? parseInt(data.seat, 10) : null,
  );
  const [passengerName, setPassengerName] = useState(data.passengerName);
  const [passengerBI, setPassengerBI] = useState(data.passengerBI);
  const [passengerPhone, setPassengerPhone] = useState(data.passengerPhone);
  const [passengerEmail, setPassengerEmail] = useState(data.passengerEmail);
  const [volumeExtra, setVolumeExtra] = useState(data.baggageExtras.volumeExtra);
  const [seguro, setSeguro] = useState(data.baggageExtras.seguro);
  const [paymentMethod, setPaymentMethod] = useState(data.paymentMethod);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const route = routes.find((r) => r.id === data.routeId) ?? routes[0];
  const basePrice = parseInt(route.preco.replace(".", ""), 10);
  const seguroPrice = seguro ? 1200 : 0;
  const volumePrice = volumeExtra ? 4500 : 0;
  const total = basePrice + seguroPrice + volumePrice;
  const animatedTotal = useCountUp(total);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routeId: data.routeId,
          data: data.data,
          passageiros: data.passageiros,
          seat: seat ? String(seat).padStart(2, "0") : "",
          passengerName,
          passengerBI,
          passengerPhone,
          passengerEmail,
          baggageExtras: { volumeExtra, seguro },
          paymentMethod,
          totalKz: total,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        setSubmitError(err.error ?? "Erro ao processar reserva.");
        return;
      }
      const result = await res.json();
      update({
        seat: seat ? String(seat).padStart(2, "0") : "",
        passengerName,
        passengerBI,
        passengerPhone,
        passengerEmail,
        baggageExtras: { volumeExtra, seguro },
        paymentMethod,
        totalKz: total,
      });
      if (result.reservation?.ticketRef) {
        try {
          sessionStorage.setItem("rosalina.lastTicket", JSON.stringify(result.reservation));
        } catch {
          // ignore
        }
      }
      router.push("/booking/confirmacao");
    } catch {
      setSubmitError("Erro de rede. Verifique a sua ligação e tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full bg-surface border-b-4 border-on-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-tertiary border-2 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-fixed mb-1">
              <MaterialIcon name="directions_bus" className="text-sm" />
              {viagem.ref}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-low border-2 border-on-surface p-4">
                <div className="font-label-code text-label-code uppercase text-on-surface-variant">VIATURA</div>
                <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                  {viagem.viaturaLabel}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{viagem.viaturaDesc}</div>
                <div className="font-body-sm text-body-sm text-secondary mt-1">{viagem.viaturaSvc}</div>
              </div>
              <div className="bg-surface-container-low border-2 border-on-surface p-4">
                <div className="font-label-code text-label-code uppercase text-on-surface-variant">TRAJETO</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-primary-container">{viagem.partida}</span>
                  <MaterialIcon name="arrow_forward" className="text-secondary" />
                  <span className="font-headline-md text-headline-md text-on-surface">{viagem.chegada}</span>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{viagem.data} · {viagem.duracao}</div>
                <div className="font-body-sm text-body-sm text-secondary">{viagem.tipo}</div>
              </div>
              <div className="bg-surface-container-low border-2 border-on-surface p-4 text-right">
                <div className="font-label-code text-label-code uppercase text-on-surface-variant">TARIFA</div>
                <div className="font-display-hero text-display-hero text-white mt-1">{viagem.preco}</div>
                <div className="bg-primary-container border-2 border-on-surface px-2 py-1 font-label-code text-label-code uppercase text-on-primary inline-block mt-1">
                  {viagem.bagagem}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <SeatMap selected={seat} onSelect={setSeat} />

              <div className="bg-tertiary border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="bg-on-background text-white border-b-2 border-on-surface px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="directions_bus" className="text-sm" />
                    <span className="font-label-code text-label-code uppercase">{fleetSpecs.header}</span>
                  </div>
                  <span className="bg-tertiary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-tertiary shadow-[2px_2px_0px_0px_#0c1a3b]">
                    {fleetSpecs.model}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-6">
                  {fleetSpecs.specs.map((s) => (
                    <div key={s.label} className="bg-surface-container-low border-2 border-on-surface p-3">
                      <div className="font-label-code text-label-code uppercase text-on-surface-variant">{s.label}</div>
                      <div className="font-body-sm text-body-sm text-on-surface mt-1">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-tertiary border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="bg-on-background text-white border-b-2 border-on-surface px-6 py-4 flex items-center gap-2">
                  <MaterialIcon name="badge" className="text-sm text-primary-fixed" />
                  <span className="font-label-code text-label-code uppercase">
                    {passenger.header}
                  </span>
                  {seat && (
                    <span className="ml-auto bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary">
                      ASSENTO {String(seat).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                      {passenger.fields[0].label} *
                    </label>
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder={passenger.fields[0].placeholder}
                      required
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                      {passenger.fields[1].label} *
                    </label>
                    <input
                      type="text"
                      value={passengerBI}
                      onChange={(e) => setPassengerBI(e.target.value)}
                      placeholder={passenger.fields[1].placeholder}
                      required
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                        +244
                      </label>
                      <div className="bg-surface-container-lowest border-2 border-on-surface px-3 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b]">
                        {passenger.phonePrefix}
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                        Telemóvel (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                        placeholder={passenger.phonePlaceholder}
                        required
                        className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                      E-mail para Envio da Fatura & E-Ticket *
                    </label>
                    <input
                      type="email"
                      value={passengerEmail}
                      onChange={(e) => setPassengerEmail(e.target.value)}
                      placeholder={passenger.emailPlaceholder}
                      required
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="border-b-2 border-on-surface px-6 py-4 font-label-code text-label-code uppercase text-on-surface">
                  <MaterialIcon name="luggage" className="text-sm inline mr-2" />BAGAGEM & EXTRAS
                </div>
                <div className="p-6 space-y-3">
                  {baggage.items.map((item) => (
                    <label
                      key={item.label}
                      className={`flex items-center gap-3 border-2 border-on-surface p-4 cursor-pointer transition-colors ${
                        item.readonly
                          ? "bg-tertiary-container opacity-60"
                          : "bg-surface-container-lowest hover:bg-surface-container"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={
                          item.label.includes("Padrão")
                            ? true
                            : item.label.includes("Volume")
                              ? volumeExtra
                              : seguro
                        }
                        onChange={
                          item.readonly
                            ? undefined
                            : item.label.includes("Volume")
                              ? () => setVolumeExtra((v) => !v)
                              : () => setSeguro((s) => !s)
                        }
                        disabled={item.readonly}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <div className="font-body-sm text-body-sm text-on-surface">{item.label}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</div>
                      </div>
                      <span
                        className={`font-label-code text-label-code uppercase px-2 py-1 border-2 border-on-surface ${
                          item.price === "INCLUSO"
                            ? "bg-tertiary text-on-tertiary"
                            : "bg-primary-container text-on-primary"
                        }`}
                      >
                        {item.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-tertiary border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="bg-on-background text-white border-b-2 border-on-surface px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="payments" className="text-sm text-primary-fixed" />
                    <span className="font-label-code text-label-code uppercase">{payment.header}</span>
                  </div>
                  <span className="bg-tertiary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-tertiary shadow-[2px_2px_0px_0px_#0c1a3b]">
                    {payment.emvBadge}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  {payment.methods.map((m) => (
                    <label
                      key={m.id}
                      className={`flex items-center gap-3 border-2 border-on-surface p-4 cursor-pointer transition-colors ${
                        paymentMethod === m.id
                          ? "bg-surface-container-high"
                          : "bg-surface-container-lowest hover:bg-surface-container"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={m.id}
                        checked={paymentMethod === m.id}
                        onChange={() => setPaymentMethod(m.id)}
                        className="w-5 h-5"
                      />
                      <MaterialIcon name={m.icon} className="text-xl text-secondary" />
                      <div className="flex-1">
                        <div className="font-body-sm text-body-sm text-on-surface">{m.label}</div>
                        {m.sub && (
                          <span className="bg-primary-container border-2 border-on-surface px-2 py-0.5 font-label-code text-label-code uppercase text-on-primary">
                            {m.sub}
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-on-background border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4">
                  <div className="font-label-code text-label-code uppercase">{payment.totalLabel}</div>
                  <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                    {payment.totalCurrency}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  {payment.breakdown.map((row) => (
                    <div key={row.label} className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                      <span>{row.label}</span>
                      <span className={row.label.includes("ISENTO") ? "text-secondary" : ""}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary-container text-on-primary px-6 py-4">
                  <div className="font-display-hero text-display-hero">{animatedTotal.toLocaleString("pt-AO")} KZ</div>
                </div>
              </div>

              {submitError && (
                <div className="bg-error-container text-on-error-container border-2 border-on-surface p-4 font-body-sm text-body-sm flex items-center gap-2">
                  <MaterialIcon name="error" className="text-base flex-shrink-0" />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={!seat || !passengerName || !passengerBI || !passengerPhone || !passengerEmail || submitting}
                className="w-full bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "PROCESSANDO PAGAMENTO..." : payment.buttonLabel}</span>
                {submitting ? (
                  <MaterialIcon name="hourglass_top" />
                ) : (
                  <MaterialIcon name="arrow_forward" />
                )}
              </button>
              <p className="font-body-sm text-body-sm text-center text-on-surface-variant">
                {payment.buttonNote}
              </p>
              <div className="space-y-2 pt-2">
                {payment.trustSeals.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <MaterialIcon name="check" className="text-sm text-secondary" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}