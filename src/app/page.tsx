import {
  HeroBooking,
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
      <HeroBooking />
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
