import { Metadata } from "next";
import { SelecaoRota } from "@/components/booking";

export const metadata: Metadata = {
  title: "Compra de Bilhetes | Rosalina Express",
  description: "Reserve o seu bilhete de forma simples e segura. Seleção de rota, assento e pagamento em 3 passos.",
};

export default function BookingPage() {
  return <SelecaoRota />;
}
