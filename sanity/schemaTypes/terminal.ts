import { defineType, defineField } from "sanity";

export const terminal = defineType({
  name: "terminal",
  title: "Terminal Rodoviário",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (R) => R.required() }),
    defineField({ name: "cidade", title: "Cidade", type: "string", validation: (R) => R.required() }),
    defineField({ name: "provincia", title: "Província", type: "string" }),
    defineField({ name: "endereco", title: "Endereço", type: "string" }),
    defineField({ name: "telefone", title: "Telefone", type: "string" }),
    defineField({ name: "horario", title: "Horário", type: "string", description: 'Ex: "06h00 - 20h00"' }),
    defineField({
      name: "coordenadas",
      title: "Coordenadas",
      type: "object",
      fields: [
        defineField({ name: "lat", title: "Latitude", type: "number" }),
        defineField({ name: "lng", title: "Longitude", type: "number" }),
      ],
    }),
    defineField({ name: "hub", title: "Hub", type: "string", description: 'Ex: "HUB 01 // PRINCIPAL"' }),
    defineField({ name: "descricao", title: "Descrição", type: "text" }),
    defineField({
      name: "ordem",
      title: "Ordem",
      type: "number",
      description: "Para ordenar os terminais no diretório",
    }),
  ],
});
