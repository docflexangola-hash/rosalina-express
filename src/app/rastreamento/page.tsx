import {
  SubHeader,
  BuscaRadar,
  RadarTelemetria,
  QuadroHorarios,
  RedeVoltas,
  Suporte,
} from "@/components/rastreamento";

export const metadata = {
  title: "Rastreamento & Horários em Tempo Real | Rosalina Express",
  description:
    "Acompanhe viaturas, reservas e cargas em tempo real. Consulta telemática GPS, quadro de partidas e monitorização da rede Voltas urbana.",
};

export default function RastreamentoPage() {
  return (
    <>
      <SubHeader />
      <BuscaRadar />
      <RadarTelemetria />
      <QuadroHorarios />
      <RedeVoltas />
      <Suporte />
    </>
  );
}
