import {
  AcaoPrincipal,
  StatsRibbon,
  SobrePreview,
  ServicosGrid,
  Beneficios,
  TerminaisRede,
  NoticiasGrid,
  CtaFinal,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <AcaoPrincipal />
      <StatsRibbon />
      <SobrePreview />
      <ServicosGrid />
      <Beneficios />
      <TerminaisRede />
      <NoticiasGrid />
      <CtaFinal />
    </>
  );
}
