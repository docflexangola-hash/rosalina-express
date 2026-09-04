import { defineType, defineField, defineArrayMember } from "sanity";

export const servico = defineType({
  name: "servico",
  title: "Serviço",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "nome" } }),
    defineField({ name: "descricao", title: "Descrição", type: "text" }),
    defineField({
      name: "descricaoDetalhada",
      title: "Descrição Detalhada",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({ name: "icone", title: "Ícone (Material Symbols)", type: "string", description: "Nome do ícone, ex: directions_bus" }),
    defineField({ name: "imagem", title: "Imagem", type: "image", options: { hotspot: true } }),
    defineField({
      name: "especificacoes",
      title: "Especificações",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "valor", title: "Valor", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
  ],
});
