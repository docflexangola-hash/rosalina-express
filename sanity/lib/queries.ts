import groq from "groq";

export const noticiasQuery = groq`*[_type == "noticia"] | order(dataPublicacao desc) {
  _id,
  titulo,
  slug,
  resumo,
  categoria,
  destaque,
  dataPublicacao,
  vistos,
  imagemCapa
}`;

export const noticiaPorSlugQuery = groq`*[_type == "noticia" && slug.current == $slug][0] {
  _id,
  titulo,
  slug,
  resumo,
  conteudo,
  categoria,
  destaque,
  dataPublicacao,
  vistos,
  imagemCapa
}`;

export const noticiasDestaqueQuery = groq`*[_type == "noticia" && destaque == true] | order(dataPublicacao desc)[0...3] {
  _id,
  titulo,
  slug,
  resumo,
  categoria,
  dataPublicacao,
  imagemCapa
}`;

export const rotasQuery = groq`*[_type == "rota"] | order(origem asc) {
  _id,
  origem,
  destino,
  saidas,
  duracaoMedia,
  distanciaKm,
  classeServico,
  frequenciaDiaria,
  tarifaBase,
  status
}`;

export const servicosQuery = groq`*[_type == "servico"] | order(ordem asc) {
  _id,
  nome,
  slug,
  descricao,
  icone,
  especificacoes,
  ordem,
  imagem
}`;

export const terminaisQuery = groq`*[_type == "terminal"] | order(ordem asc) {
  _id,
  nome,
  cidade,
  provincia,
  endereco,
  telefone,
  horario,
  coordenadas,
  hub,
  descricao
}`;

export const configuracoesQuery = groq`*[_type == "configuracoes"][0]`;
