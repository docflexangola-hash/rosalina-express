import {
  SubHeader,
  FiltrosNoticias,
  NoticiaDestaque,
  GridNoticias,
  TabelaBoletins,
  Newsletter,
  Imprensa,
} from "@/components/noticias";

export const metadata = {
  title: "Sala de Imprensa & Comunicados Operacionais | Rosalina Express",
  description:
    "Últimas notícias, comunicados operacionais, avisos de tráfico, novos horários e despachos oficiais do Grupo Rosalina Express.",
};

export default function NoticiasPage() {
  return (
    <>
      <SubHeader />
      <FiltrosNoticias />
      <NoticiaDestaque />
      <GridNoticias />
      <TabelaBoletins />
      <Newsletter />
      <Imprensa />
    </>
  );
}