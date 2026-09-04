import { defineType, defineField, defineArrayMember } from "sanity";

export const noticia = defineType({
  name: "noticia",
  title: "Notícia / Comunicado",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resumo",
      title: "Resumo",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "conteudo",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image" }),
      ],
    }),
    defineField({
      name: "imagemCapa",
      title: "Imagem de Capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: {
        list: ["Bilhética", "Atendimento", "Frequências", "Operações", "Institucional", "Segurança"],
      },
    }),
    defineField({
      name: "destaque",
      title: "Destaque",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "dataPublicacao",
      title: "Data de Publicação",
      type: "datetime",
    }),
    defineField({
      name: "vistos",
      title: "Vistos",
      type: "number",
      initialValue: 0,
    }),
  ],
  initialValue: {
    dataPublicacao: new Date().toISOString(),
  },
});
