import {
  SubHeader,
  HeroSede,
  Timeline,
  Segmentos,
  Lideranca,
  Certificacoes,
  CtaInstitucional,
} from "@/components/sobre";

export const metadata = {
  title: "Sobre Nós | Grupo Rosalina Express",
  description:
    "A história, dimensão estratégica, segmentos empresariais, liderança e certificações do Grupo Rosalina Express — referência da mobilidade rodoviária em Angola.",
};

export default function SobrePage() {
  return (
    <>
      <SubHeader />
      <HeroSede />
      <Timeline />
      <Segmentos />
      <Lideranca />
      <Certificacoes />
      <CtaInstitucional />
    </>
  );
}
