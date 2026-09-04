"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { useBooking } from "@/components/booking/BookingContext";
import { bookingContent } from "@/content/booking";

type ApiReservation = {
  ticketRef: string;
  txId: string;
  routeId: string;
  seat: string;
  data: string;
  passenger: { name: string; bi: string; phone: string; email: string };
  payment: { method: string; totalKz: number; status: string };
};

export function Confirmacao() {
  const { data, reset } = useBooking();
  const { routes, viagem } = bookingContent;
  const route = routes.find((r) => r.id === data.routeId) ?? routes[0];

  const [reservation] = useState<ApiReservation | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = sessionStorage.getItem("rosalina.lastTicket");
      if (!raw) return null;
      return JSON.parse(raw) as ApiReservation;
    } catch {
      return null;
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const ticketRef =
    reservation?.ticketRef ??
    `${route.id}-${(data.data || "000000").replace(/-/g, "")}-${(data.seat || "00").padStart(2, "0")}`;
  const [transactionId] = useState<string>(() =>
    reservation?.txId ?? `MCX-${Math.floor(Math.random() * 1000000)}-AO-2026`,
  );

  useEffect(() => {
    if (!toastMessage) return;
    const showTimeout = setTimeout(() => setToastVisible(true), 0);
    const hideTimeout = setTimeout(() => {
      setToastVisible(false);
      setTimeout(() => setToastMessage(null), 300);
    }, 4000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [toastMessage]);

  const handleAction = (label: string, msg: string) => {
    if (label.toLowerCase().includes("imprimir")) {
      if (typeof window !== "undefined") window.print();
    } else {
      setToastMessage(msg);
    }
  };

  return (
    <>
      <div className="w-full bg-surface border-b-4 border-on-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-surface-container-high border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] px-6 py-3 flex flex-wrap items-center gap-3 mb-8 font-label-code text-label-code uppercase">
            <span className="bg-tertiary text-on-tertiary border-2 border-on-surface px-3 py-1">
              SISTEMA EMIS-SECURE
            </span>
            <span>{'/// TRANSAÇÃO HOMOLOGADA COM SUCESSO'}</span>
            <span className="ml-auto">EMISSÃO: 24 OUT 2026 • 05:42:19 WAT</span>
          </div>

          <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6 mb-8">
            <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface mb-4">
              <MaterialIcon name="verified" className="text-base text-primary-container" />
              CHECKOUT COMPLETO
              <span className="ml-auto bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary">
                SESSÃO FINALIZADA COM SUCESSO
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", label: "ROTA & HORÁRIO", detail: `${route.origem} ➔ ${route.destino} • ${route.partida}` },
                { num: "02", label: "ASSENTO & AUTOCARRO", detail: `POLTRONA ${data.seat || "14"} • ${route.prefix}` },
                { num: "03", label: "PASSAGEIRO & BAGAGEM", detail: `${(data.passengerName || "PASSAGEIRO").split(" ").slice(0, 2).join(" ")} • 25KG PORÃO` },
                { num: "04", label: "PAGAMENTO & E-TICKET", detail: `MULTICAIXA • ${data.totalKz.toLocaleString("pt-AO")} KZ` },
              ].map((s) => (
                <div
                  key={s.num}
                  className="bg-surface-container-low border-2 border-on-surface p-3"
                >
                  <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-secondary">
                    <span className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
                      <MaterialIcon name="check" className="text-xs" />
                    </span>
                    PASSO {s.num}
                  </div>
                  <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-2">
                    {s.label}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6 mb-8 text-center reveal">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary">
                TRANSAÇÃO HOMOLOGADA
              </span>
              <span className="bg-tertiary border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-tertiary">
                VIA MULTICAIXA EXPRESS
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-2">
              Pagamento Concluído com Sucesso
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto">
              O seu bilhete digital foi validado pela central de tráfego rodoviário. O comprovativo oficial
              foi despachado para o seu WhatsApp ({data.passengerPhone || "+244 923 884 190"}) e email
              ({data.passengerEmail || "passageiro@email.ao"}).
            </p>
            <div className="mt-6 inline-block bg-surface-container-low border-2 border-on-surface p-4 text-left">
              <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                CÓDIGO DE RESERVA:
              </div>
              <div className="font-display-hero text-display-hero text-primary-container">
                {ticketRef}
              </div>
              <div className="font-label-code text-label-code uppercase text-on-surface-variant mt-2">
                ID DE TRANSAÇÃO MCX:
              </div>
              <div className="font-headline-sm text-headline-sm text-on-surface">
                {transactionId}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] mb-8 reveal">
            <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase">
                <MaterialIcon name="confirmation_number" className="text-sm" />
                CARTÃO DE EMBARQUE ELETRÓNICO (E-TICKET)
              </div>
              <span className="bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary">
                VALIDADO
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-8 p-6 space-y-4">
                <div className="flex items-center justify-between border-b-2 border-outline-variant pb-3">
                  <div>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                      ROSALINA EXPRESS // REDE NACIONAL
                    </div>
                    <div className="font-headline-md text-headline-md uppercase text-primary-container mt-1">
                      SERVIÇO EXECUTIVO CLIMATIZADO VIP
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                      TIPO DE EMISSÃO
                    </div>
                    <div className="font-label-code text-label-code uppercase text-on-surface">
                      BILHETE NORMAL INDIVIDUAL
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                      PONTO DE EMBARQUE (ORIGEM)
                    </div>
                    <div className="font-display-hero text-display-hero text-primary-container">
                      {route.origem}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface">
                      Terminal Central • Av. Ho Chi Minh
                    </div>
                    <span className="mt-2 inline-block bg-primary-container border-2 border-on-surface px-2 py-1 font-label-code text-label-code uppercase text-on-primary">
                      CAIS 01 • PLATAFORMA NORTE
                    </span>
                  </div>
                  <div>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                      DESTINO FINAL
                    </div>
                    <div className="font-display-hero text-display-hero text-on-surface">
                      {route.destino}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface">
                      Terminal Independência • Zona Central
                    </div>
                    <span className="mt-2 inline-block bg-tertiary border-2 border-on-surface px-2 py-1 font-label-code text-label-code uppercase text-on-tertiary">
                      DESEMBARQUE CENTRAL
                    </span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-center gap-2 font-headline-md text-headline-md text-on-surface">
                    <span>{viagem.duracao}</span>
                    <MaterialIcon name="arrow_forward" className="text-secondary" />
                    <span>540 KM</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-surface-container-low border-2 border-on-surface p-3">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">PASSAGEIRO</div>
                    <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                      {(data.passengerName || "PASSAGEIRO").split(" ").slice(0, 3).join(" ").toUpperCase()}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      BI: {data.passengerBI || "004839201LA042"}
                    </div>
                  </div>
                  <div className="bg-surface-container-low border-2 border-on-surface p-3">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">DATA DA VIAGEM</div>
                    <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                      24 OUT 2026
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">SÁBADO DE MANHÃ</div>
                  </div>
                  <div className="bg-surface-container-low border-2 border-on-surface p-3">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">PARTIDA RIGOROSA</div>
                    <div className="font-headline-sm text-headline-sm uppercase text-primary-container mt-1">
                      {route.partida}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">EMBARQUE: 05H50</div>
                  </div>
                  <div className="bg-surface-container-low border-2 border-on-surface p-3">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">CHEGADA PREVISTA</div>
                    <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                      {route.chegada}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">HORÁRIO ESTIMADO</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-primary-container text-on-primary border-2 border-on-surface p-4">
                    <div className="font-label-code text-label-code uppercase flex items-center gap-2">
                      <MaterialIcon name="airline_seat_recline_extra" className="text-sm" />
                      POLTRONA ATRIBUÍDA
                    </div>
                    <div className="font-display-hero text-display-hero mt-1">
                      ASSENTO {data.seat || "14"}
                    </div>
                    <div className="font-body-sm text-body-sm">JANELA • LADO DIREITO • FILA 04</div>
                    <div className="font-label-code text-label-code uppercase mt-1">POLTRONA SOFT LEITO EXECUTIVO</div>
                  </div>
                  <div className="bg-surface-container-low border-2 border-on-surface p-4">
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant">AUTOCARRO DESIGNADO</div>
                    <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                      {route.viatura}
                    </div>
                    <div className="font-label-code text-label-code uppercase text-primary-container">
                      PREFIXO: {route.prefix}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 font-body-sm text-body-sm text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <MaterialIcon name="luggage" className="text-xs" /> 1x Mala Porão (25kg)
                      </div>
                      <div className="flex items-center gap-1">
                        <MaterialIcon name="backpack" className="text-xs" /> 1x Mala de Mão (5kg)
                      </div>
                      <div className="flex items-center gap-1">
                        <MaterialIcon name="shield" className="text-xs" /> Seguro Ativo
                      </div>
                      <div className="flex items-center gap-1">
                        <MaterialIcon name="wifi" className="text-xs" /> Wi-Fi & Tomadas
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-label-code text-label-code uppercase text-on-surface-variant pt-3 border-t-2 border-outline-variant">
                  HASH: 8F2A-94B1-002E-ROSALINA-EXPRESS-AUTH
                </div>
              </div>

              <div className="lg:col-span-4 bg-surface-container p-6 flex flex-col items-center justify-center text-center border-t-2 lg:border-t-0 lg:border-l-2 border-on-surface">
                <div className="font-label-code text-label-code uppercase text-tertiary">
                  CANHOTO DE VALIDAÇÃO
                </div>
                <div className="font-label-code text-label-code uppercase text-on-surface-variant text-sm">
                  LEITURA TÁCTICA DE TORNIQUETE
                </div>
                <div className="mt-4 bg-white p-4 border-2 border-on-surface reveal is-visible">
                  <svg viewBox="0 0 25 25" className="w-32 h-32 draw-qr">
                    <rect x="0" y="0" width="25" height="25" fill="white" />
                    {Array.from({ length: 13 }).map((_, r) =>
                      Array.from({ length: 25 }).map((_, c) => {
                        const fill = (r * 7 + c * 11 + c * r) % 3 === 0;
                        return (
                          <rect
                            key={`${r}-${c}`}
                            x={c}
                            y={r}
                            width="1"
                            height="1"
                            fill={fill ? "#0C1A3B" : "white"}
                          />
                        );
                      }),
                    )}
                    <rect x="11" y="11" width="3" height="3" fill="#A22332" />
                  </svg>
                </div>
                <div className="mt-3 font-label-code text-label-code uppercase text-on-surface">
                  *{ticketRef.replace(/-/g, "")}*
                </div>
                <div className="mt-4 bg-tertiary text-on-tertiary border-2 border-on-surface px-3 py-2 font-label-code text-label-code uppercase flex items-center gap-2">
                  <MaterialIcon name="verified_user" className="text-sm text-primary-fixed" />
                  AUDITADO & AUTORIZADO
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                  Apresentar no ecrã do telemóvel ou em papel impresso aos fiscais do Cais 01.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <button
              type="button"
              onClick={() => handleAction("descarregar", "A gerar e descarregar bilhete oficial PDF...")}
              className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-4 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
            >
              <MaterialIcon name="download" className="text-sm" />
              <span className="text-xs">Descarregar (PDF)</span>
            </button>
            <button
              type="button"
              onClick={() => handleAction("whatsapp", `E-Ticket reenviado para +244 ${data.passengerPhone || "923 884 190"}!`)}
              className="bg-tertiary text-on-tertiary font-headline-sm text-headline-sm uppercase px-4 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
            >
              <MaterialIcon name="chat" className="text-sm" />
              <span className="text-xs">Reenviar WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => handleAction("wallet", "Passe adicionado à carteira digital (Apple/Google Wallet).")}
              className="bg-surface-container-highest text-on-surface font-headline-sm text-headline-sm uppercase px-4 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
            >
              <MaterialIcon name="wallet" className="text-sm" />
              <span className="text-xs">Guardar no Wallet</span>
            </button>
            <button
              type="button"
              onClick={() => handleAction("imprimir", "")}
              className="bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm uppercase px-4 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
            >
              <MaterialIcon name="print" className="text-sm" />
              <span className="text-xs">Imprimir Recibo</span>
            </button>
          </div>

          <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6 text-white reveal">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="font-label-code text-label-code uppercase text-primary-fixed flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container rounded-full animate-ping" />
                RADAR RODOVIÁRIO EM TEMPO REAL
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase">
              Acompanhe o Posicionamento do Autocarro {route.prefix}
            </h2>
            <p className="font-body-md text-body-md text-on-tertiary leading-relaxed mt-3">
              Consulte a localização via satélite da sua viatura, estado da via na Estrada Nacional Nº 100,
              previsão meteorológica e tempo estimado de chegada das paragens técnicas em Sumbe e Lobito.
            </p>
            <Link
              href="/rastreamento"
              className="mt-4 inline-flex items-center gap-3 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <MaterialIcon name="satellite_alt" className="text-sm" />
              Aceder ao Radar de Viagem
            </Link>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/"
              onClick={() => { reset(); try { sessionStorage.removeItem("rosalina.lastTicket"); } catch {} }} 
              className="bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
            >
              <MaterialIcon name="home" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      {toastVisible && toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-tertiary text-white border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] px-6 py-3 flex items-center gap-2 max-w-md">
          <MaterialIcon name="check_circle" className="text-primary-fixed" />
          <span className="font-body-sm text-body-sm">{toastMessage}</span>
        </div>
      )}
    </>
  );
}