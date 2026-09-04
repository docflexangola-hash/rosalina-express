import { defineType, defineField, defineArrayMember } from "sanity";

export const rota = defineType({
  name: "rota",
  title: "Rota / Horário",
  type: "document",
  fields: [
    defineField({ name: "origem", title: "Origem", type: "string", validation: (R) => R.required() }),
    defineField({ name: "destino", title: "Destino", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "saidas",
      title: "Saídas",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: 'Ex: ["06:00", "08:30", "11:00"]',
    }),
    defineField({ name: "duracaoMedia", title: "Duração Média", type: "string", description: 'Ex: "~ 7h 30min"' }),
    defineField({ name: "distanciaKm", title: "Distância (km)", type: "number" }),
    defineField({ name: "classeServico", title: "Classe de Serviço", type: "string" }),
    defineField({ name: "frequenciaDiaria", title: "Frequência Diária", type: "number" }),
    defineField({
      name: "tarifaBase",
      title: "Tarifa Base (KZ)",
      type: "number",
      description: "Preço base do bilhete em Kwanzas",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Ativa", "Suspensa", "Sazonal"] },
      initialValue: "Ativa",
    }),
  ],
});
