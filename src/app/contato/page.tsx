import {
  SubHeader,
  InfoCards,
  Terminais,
  FormContacto,
  Faq,
  MapaRota,
} from "@/components/contato";
import { contatoContent } from "@/content/contato";

export const metadata = {
  title: "Contato & Terminais | Grupo Rosalina Express",
  description:
    "Fale com a Rosalina Express, localize os nossos terminais em Luanda, Benguela, Huambo e Lobito, ou envie-nos a sua mensagem.",
};

export default function ContatoPage() {
  const { terminaisTitle, terminaisBadge, terminais } = contatoContent;
  return (
    <>
      <SubHeader />
      <InfoCards />
      <Terminais badge={terminaisBadge} title={terminaisTitle} terminais={terminais} />
      <FormContacto />
      <Faq />
      <MapaRota />
    </>
  );
}
