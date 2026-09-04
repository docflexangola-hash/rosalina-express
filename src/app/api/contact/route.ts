import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  assunto: string;
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;

    if (!body.nome || !body.email || !body.mensagem || !body.assunto) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta: nome, email, assunto, mensagem" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Endereço de e-mail inválido" }, { status: 400 });
    }

    console.log("[API/contact] Nova mensagem recebida:", {
      assunto: body.assunto,
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      mensagem: body.mensagem,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem recebida com sucesso. Responderemos em menos de 24 horas úteis.",
        reference: `CT-${Date.now()}`,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
