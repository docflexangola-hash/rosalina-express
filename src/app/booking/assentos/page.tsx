import { Metadata } from "next";
import { SelecaoAssentos } from "@/components/booking";

export const metadata: Metadata = {
  title: "Selecionar Assento & Pagamento | Rosalina Express",
  description: "Escolha o seu assento, preencha os dados do passageiro e efetue o pagamento Multicaixa Express.",
};

export default function AssentosPage() {
  return <SelecaoAssentos />;
}
