import { NextRequest, NextResponse } from "next/server";

type Telemetry = {
  code: string;
  route: string;
  bus: string;
  speed: number;
  km: number;
  eta: string;
  position: string;
  driver: string;
  status: string;
  checkpoints: { time: string; location: string; note: string }[];
};

const inMemoryStore = new Map<string, Telemetry>();

inMemoryStore.set("RE-014", {
  code: "RE-014",
  route: "Luanda ➔ Benguela",
  bus: "Marcopolo G7 Scania K",
  speed: 88,
  km: 342,
  eta: "1h 40m",
  position: "EN-100 — Km 342 — Posto Canjala",
  driver: "Cap. Mateus Ndala (ID: RO-4402)",
  status: "EM TRÂNSITO",
  checkpoints: [
    { time: "07:30", location: "Terminal Luanda", note: "Partida no horário" },
    { time: "09:42", location: "Posto Fiscal Cabo Ledo", note: "Verificação tacógrafo OK" },
    { time: "14:38", location: "Sumbe Sul — Km 340", note: "Paragem técnica concluída" },
  ],
});

inMemoryStore.set("RE-089", {
  code: "RE-089",
  route: "Luanda ➔ Huambo",
  bus: "Scania K410",
  speed: 82,
  km: 118,
  eta: "4h 15m",
  position: "EN-260 — Km 118 — Via Dondo",
  driver: "Cap. João António (ID: RO-5501)",
  status: "EM TRÂNSITO",
  checkpoints: [
    { time: "08:30", location: "Terminal Luanda", note: "Partida no horário" },
    { time: "10:15", location: "Dondo Sul", note: "Verificação documentação OK" },
  ],
});

inMemoryStore.set("RE-105", {
  code: "RE-105",
  route: "Benguela ➔ Lobito",
  bus: "Volvo B11R",
  speed: 65,
  km: 594,
  eta: "22m",
  position: "EN-100 — Km 594 — Aproximação Lobito",
  driver: "Cap. Elisa Francisco (ID: RO-2203)",
  status: "APROXIMAÇÃO",
  checkpoints: [
    { time: "14:00", location: "Terminal Benguela", note: "Partida no horário" },
  ],
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;
  const normalized = code?.toUpperCase().trim();

  if (!normalized) {
    return NextResponse.json({ error: "Código de rastreamento não fornecido" }, { status: 400 });
  }

  const record = inMemoryStore.get(normalized);

  if (record) {
    return NextResponse.json(
      {
        found: true,
        data: record,
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    {
      found: false,
      error: `Nenhum registo encontrado para o código: ${normalized}`,
      suggestion: "Experimente: RE-014, RE-089 ou RE-105",
    },
    { status: 404 },
  );
}
