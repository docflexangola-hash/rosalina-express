"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useBooking } from "@/components/booking/BookingContext";
import { bookingContent } from "@/content/booking";

export function SelecaoRota() {
  const router = useRouter();
  const { data, update } = useBooking();
  const { routes } = bookingContent;
  const [origem, setOrigem] = useState(data.routeId.startsWith("RE-") ? routes.find((r) => r.id === data.routeId)?.origem ?? "LUANDA" : "LUANDA");
  const [destino, setDestino] = useState(data.routeId.startsWith("RE-") ? routes.find((r) => r.id === data.routeId)?.destino ?? "BENGUELA" : "BENGUELA");
  const [dataField, setDataField] = useState(data.data);
  const [passageiros, setPassageiros] = useState(data.passageiros);

  const cidades = ["LUANDA", "BENGUELA", "HUAMBO", "LOBITO"];

  const filteredRoutes = routes.filter(
    (r) => r.origem === origem && r.destino === destino,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const first = filteredRoutes[0];
    if (first) {
      update({
        routeId: first.id,
        data: dataField,
        passageiros,
        seat: "",
      });
      router.push("/booking/assentos");
    }
  };

  return (
    <section className="w-full bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-tertiary text-on-tertiary border-2 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] p-6 md:p-8">
          <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-fixed">
            <MaterialIcon name="directions_bus" className="text-sm" />
            1. SELECIONE A SUA ROTA
          </div>
          <h1 className="font-display-hero text-display-hero uppercase text-white leading-none tracking-tight mt-2">
            Bilhetes & Reservas Online
          </h1>
          <p className="font-body-md text-body-md text-primary-fixed mt-3">
            Compre o seu bilhete em 3 passos simples: escolha a rota, o assento e efetue o pagamento.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                  <MaterialIcon name="place" className="text-sm inline mr-1" /> ORIGEM
                </label>
                <select
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                >
                  {cidades.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                  <MaterialIcon name="place" className="text-sm inline mr-1" /> DESTINO
                </label>
                <select
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                >
                  {cidades.filter((c) => c !== origem).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                  <MaterialIcon name="calendar_month" className="text-sm inline mr-1" /> DATA DA VIAGEM
                </label>
                <input
                  type="date"
                  value={dataField}
                  onChange={(e) => setDataField(e.target.value)}
                  className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-label-code text-label-code uppercase text-primary-fixed mb-2">
                  <MaterialIcon name="group" className="text-sm inline mr-1" /> PASSAGEIROS
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPassageiros(Math.max(1, passageiros - 1))}
                    className="w-10 h-10 border-2 border-on-surface bg-surface-container-lowest text-on-surface font-display-hero text-headline-md"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-display-hero text-display-hero text-on-surface">
                    {passageiros}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPassageiros(Math.min(4, passageiros + 1))}
                    className="w-10 h-10 border-2 border-on-surface bg-surface-container-lowest text-on-surface font-display-hero text-headline-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <span className="font-label-code text-label-code uppercase text-primary-fixed">
                VIAGENS DISPONÍVEIS:
              </span>
              <div className="mt-3 space-y-3">
                {filteredRoutes.length === 0 ? (
                  <div className="bg-surface-container-lowest border-2 border-on-surface p-4 font-body-md text-body-md text-on-surface-variant">
                    Sem viagens diretas entre {origem} e {destino}. Tente outra combinação.
                  </div>
                ) : (
                  filteredRoutes.map((r) => (
                    <label
                      key={r.id}
                      className="flex flex-col md:flex-row md:items-center gap-3 bg-surface-container-lowest border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] p-4 cursor-pointer hover:bg-surface-container transition-colors"
                    >
                      <input
                        type="radio"
                        name="route"
                        value={r.id}
                        defaultChecked={data.routeId === r.id}
                        onChange={() => update({ routeId: r.id })}
                        className="w-5 h-5"
                      />
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <div>
                          <div className="font-label-code text-label-code uppercase text-on-surface-variant">PARTIDA</div>
                          <div className="font-headline-md text-headline-md text-primary-container">
                            {r.partida}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface">{r.origem}</div>
                        </div>
                        <div>
                          <div className="font-label-code text-label-code uppercase text-on-surface-variant">CHEGADA</div>
                          <div className="font-headline-md text-headline-md text-on-surface">
                            {r.chegada}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface">{r.destino}</div>
                        </div>
                        <div>
                          <div className="font-label-code text-label-code uppercase text-on-surface-variant">DURAÇÃO</div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">
                            {r.duracao}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">{r.tipo}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-label-code text-label-code uppercase text-on-surface-variant">PREÇO</div>
                          <div className="font-display-hero text-display-hero text-primary-container">
                            {r.preco} KZ
                          </div>
                        </div>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={filteredRoutes.length === 0}
                className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_0px_#0c1a3b] shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3 disabled:opacity-50"
              >
                <span>Continuar para Assentos</span>
                <MaterialIcon name="arrow_forward" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}