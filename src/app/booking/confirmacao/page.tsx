import { Metadata } from "next";
import { Confirmacao } from "@/components/booking";

export const metadata: Metadata = {
  title: "Bilhete Digital Emitido | Rosalina Express",
  description: "O seu bilhete digital foi validado com sucesso. Apresente o QR code no embarque.",
};

export default function ConfirmacaoPage() {
  return <Confirmacao />;
}
