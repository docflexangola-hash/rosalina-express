import type { Metadata } from "next";
import { HeroStrip } from "@/components/v2/home/HeroStrip";
import { ServicosDiretos } from "@/components/v2/home/ServicosDiretos";
import { CoberturaRapida } from "@/components/v2/home/CoberturaRapida";
import { StatsRibbonV2 } from "@/components/v2/home/StatsRibbonV2";
import { NoticiaChave } from "@/components/v2/home/NoticiaChave";
import { ContatoDireto } from "@/components/v2/home/ContatoDireto";

export const metadata: Metadata = {
  title: "V2 | Rosalina Express",
  description:
    "Versão de teste da página principal - Rosalina Express. Transporte rápido e seguro em Angola.",
};

export default function V2HomePage() {
  return (
    <>
      <HeroStrip />
      <ServicosDiretos />
      <CoberturaRapida />
      <StatsRibbonV2 />
      <NoticiaChave />
      <ContatoDireto />
    </>
  );
}
