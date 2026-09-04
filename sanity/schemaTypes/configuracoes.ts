import { defineType, defineField, defineArrayMember } from "sanity";

export const configuracoes = defineType({
  name: "configuracoes",
  title: "Configurações Globais",
  type: "document",
  fields: [
    defineField({ name: "empresaNome", title: "Nome da Empresa", type: "string" }),
    defineField({ name: "telefoneGeral", title: "Telefone Geral", type: "string" }),
    defineField({ name: "telefoneWhatsApp", title: "Telefone WhatsApp", type: "string" }),
    defineField({ name: "emailGeral", title: "Email Geral", type: "string" }),
    defineField({ name: "horarioAtendimento", title: "Horário de Atendimento", type: "string" }),
    defineField({ name: "enderecoSede", title: "Endereço da Sede", type: "string" }),
    defineField({
      name: "stats",
      title: "Estatísticas da Empresa",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "valor", title: "Valor", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "pergunta", title: "Pergunta", type: "string" }),
            defineField({ name: "resposta", title: "Resposta", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "protocolosEmbarque",
      title: "Protocolos de Embarque",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
