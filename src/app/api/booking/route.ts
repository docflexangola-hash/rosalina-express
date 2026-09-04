import { NextRequest, NextResponse } from "next/server";

type BookingBody = {
  routeId?: string;
  data?: string;
  passageiros?: number;
  seat?: string;
  passengerName?: string;
  passengerBI?: string;
  passengerPhone?: string;
  passengerEmail?: string;
  baggageExtras?: { volumeExtra?: boolean; seguro?: boolean };
  paymentMethod?: string;
  totalKz?: number;
};

const validRoutes = new Set(["RE-014", "RE-089", "RE-105"]);
const validMethods = new Set(["multicaixa", "referencia", "cartao"]);

function generateTicketRef(routeId: string, data: string, seat: string): string {
  const dateCompact = (data || "0000-00-00").replace(/-/g, "").slice(2);
  return `${routeId}-${dateCompact}-${(seat || "00").padStart(2, "0")}`;
}

function generateTxId(): string {
  return `MCX-${Math.floor(Math.random() * 1000000)}-AO-2026`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as BookingBody;

    if (!body.routeId || !validRoutes.has(body.routeId)) {
      return NextResponse.json({ error: "Rota inválida" }, { status: 400 });
    }
    if (!body.data || !/^\d{4}-\d{2}-\d{2}$/.test(body.data)) {
      return NextResponse.json({ error: "Data inválida (formato esperado: YYYY-MM-DD)" }, { status: 400 });
    }
    if (!body.passageiros || body.passageiros < 1 || body.passageiros > 4) {
      return NextResponse.json({ error: "Número de passageiros inválido (1-4)" }, { status: 400 });
    }
    if (!body.seat || !/^\d{2}$/.test(body.seat)) {
      return NextResponse.json({ error: "Assento inválido" }, { status: 400 });
    }
    if (!body.passengerName || body.passengerName.length < 3) {
      return NextResponse.json({ error: "Nome do passageiro inválido" }, { status: 400 });
    }
    if (!body.passengerBI || body.passengerBI.length < 5) {
      return NextResponse.json({ error: "Documento de identificação inválido" }, { status: 400 });
    }
    if (!body.passengerPhone || body.passengerPhone.length < 7) {
      return NextResponse.json({ error: "Telefone inválido" }, { status: 400 });
    }
    if (!body.passengerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.passengerEmail)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }
    if (!body.paymentMethod || !validMethods.has(body.paymentMethod)) {
      return NextResponse.json({ error: "Método de pagamento inválido" }, { status: 400 });
    }

    const ticketRef = generateTicketRef(body.routeId, body.data, body.seat);
    const txId = generateTxId();
    const timestamp = new Date().toISOString();

    const reservation = {
      ticketRef,
      txId,
      routeId: body.routeId,
      data: body.data,
      seat: body.seat,
      passageiros: body.passageiros,
      passenger: {
        name: body.passengerName,
        bi: body.passengerBI,
        phone: body.passengerPhone,
        email: body.passengerEmail,
      },
      baggage: {
        volumeExtra: Boolean(body.baggageExtras?.volumeExtra),
        seguro: Boolean(body.baggageExtras?.seguro),
      },
      payment: {
        method: body.paymentMethod,
        totalKz: body.totalKz ?? 0,
        status: "APPROVED",
      },
      issuedAt: timestamp,
    };

    console.log("[API/booking] Nova reserva criada:", reservation);

    return NextResponse.json(
      {
        success: true,
        message: "Reserva criada e pagamento confirmado",
        reservation,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
