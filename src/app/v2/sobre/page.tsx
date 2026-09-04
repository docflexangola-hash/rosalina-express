import type { Metadata } from "next";
import { HeroCurto } from "@/components/v2/sobre/HeroCurto";
import { NumerosChave } from "@/components/v2/sobre/NumerosChave";
import { QuatroSegmentos } from "@/components/v2/sobre/QuatroSegmentos";
import { LinhaDoTempo } from "@/components/v2/sobre/LinhaDoTempo";
import { TerminaisReais } from "@/components/v2/sobre/TerminaisReais";
import { CertificacoesV2 } from "@/components/v2/sobre/CertificacoesV2";

export const metadata: Metadata = {
  title: "Sobre Nós V2 | Grupo Rosalina Express",
  description:
    "Versão de teste da página Sobre Nós - Grupo Rosalina Express. Mais de 20 anos a conectar Angola.",
};

export default function V2SobrePage() {
  return (
    <>
      <HeroCurto />
      <NumerosChave />
      <QuatroSegmentos />
      <LinhaDoTempo />
      <TerminaisReais />
      <CertificacoesV2 />
    </>
  );
}
