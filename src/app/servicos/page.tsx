import {
  SubHeader,
  RedeExpress,
  VoltasUrbanas,
  Shuttles,
  Cargas,
  Garantia,
  CtaServicos,
} from "@/components/servicos";

export const metadata = {
  title: "Serviços & Frotas | Grupo Rosalina Express",
  description:
    "Rede Express interprovincial, sistema urbano Voltas, shuttles executivos, frotas dedicadas e despacho de cargas em Angola.",
};

export default function ServicosPage() {
  return (
    <>
      <SubHeader />
      <RedeExpress />
      <VoltasUrbanas />
      <Shuttles />
      <Cargas />
      <Garantia />
      <CtaServicos />
    </>
  );
}
