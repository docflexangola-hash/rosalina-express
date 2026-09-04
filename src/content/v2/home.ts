export const v2HomeContent = {
  hero: {
    badge: "TRANSPORTE RÁPIDO E SEGURO EM ANGOLA",
    titleTop: "Grupo",
    titleAccent: "Rosalina Express",
    description:
      "Líder em transporte de passageiros em Angola. Viaje connosco para Luanda, Benguela, Huambo, Lobito e mais com conforto e segurança.",
    ctaPrimary: "Reservar Bilhete",
    ctaSecondary: "Rastrear Viagem",
    ctaPrimaryHref: "/booking",
    ctaSecondaryHref: "/rastreamento",
    statusBadge: "EXPEDIÇÃO DIÁRIA 06:00 — 20:00",
  },
  servicos: {
    badge: "OS NOSSOS SERVIÇOS",
    title: "Soluções de transporte para cada necessidade",
    items: [
      {
        tag: "REDE EXPRESSO",
        title: "Viagens Interurbanas",
        subtitle: "Luanda ↔ Benguela ↔ Huambo ↔ Lobito",
        frequency: "Diário, várias saídas",
        seats: "55 lugares",
        price: "Desde 4.500 KZ",
        cta: "Reservar",
        ctaHref: "/booking",
      },
      {
        tag: "VOLTAS URBANAS",
        title: "Transporte Urbano",
        subtitle: "Luanda — Maianga, Viana, Cacuaco, Kilamba",
        frequency: "06:00 — 20:00, alta frequência",
        seats: "45 lugares",
        price: "Desde 150 KZ",
        cta: "Ver Horários",
        ctaHref: "/servicos",
      },
      {
        tag: "SHUTTLES",
        title: "Shuttle Executivo",
        subtitle: "Aeroporto, hotéis, empresas",
        frequency: "Sob marcação",
        seats: "7 a 15 lugares",
        price: "Sob consulta",
        cta: "Contactar",
        ctaHref: "/contato",
      },
      {
        tag: "ALUGUER",
        title: "Aluguer de Viaturas",
        subtitle: "Com ou sem motorista",
        frequency: "Reserva antecipada",
        seats: "5 a 75 lugares",
        price: "Sob consulta",
        cta: "Contactar",
        ctaHref: "/contato",
      },
    ],
  },
  cobertura: {
    badge: "COBERTURA NACIONAL",
    title: "4 Províncias // 50+ Linhas // Cobertura Diária",
    provinces: [
      {
        province: "LUANDA",
        capital: true,
        terminals: [
          {
            name: "Central Maianga",
            address: "Largo Das Escolas, Maianga",
            phone: "+244 924 720 533",
          },
          {
            name: "Terminal Zango 0",
            address: "Estrad. Zango / Calumbo",
            phone: "+244 942 235 692",
          },
        ],
        destinations: ["Benguela", "Huambo", "Lobito", "Cacuaco", "Viana"],
        frequency: "06:00 — 20:00",
      },
      {
        province: "BENGUELA",
        capital: false,
        terminals: [
          {
            name: "Terminal Central Benguela",
            address: "Av. da Independência",
            phone: "Via Luanda",
          },
        ],
        destinations: ["Luanda", "Lobito", "Huambo"],
        frequency: "Chegadas e partidas a cada 3h",
      },
      {
        province: "HUAMBO",
        capital: false,
        terminals: [
          {
            name: "Terminal Regional Huambo",
            address: "Parque Rodoviário Rosalina Express",
            phone: "Via Luanda",
          },
        ],
        destinations: ["Luanda", "Benguela", "Lobito"],
        frequency: "Diário directo",
      },
      {
        province: "LOBITO",
        capital: false,
        terminals: [
          {
            name: "Terminal Lobito",
            address: "Frontoffice Lobito",
            phone: "+244 929 524 242",
          },
        ],
        destinations: ["Luanda", "Benguela", "Huambo"],
        frequency: "Diário directo",
      },
    ],
  },
  stats: {
    badge: "MÉTRICAS DO GRUPO",
    items: [
      {
        value: "20",
        suffix: "M",
        title: "Passageiros transportados",
        text: "Anualmente em toda a rede nacional",
      },
      {
        value: "25",
        suffix: "+",
        title: "Parques e Terminais",
        text: "Próprios em 4 províncias angolanas",
      },
      {
        value: "50",
        suffix: "+",
        title: "Linhas Operacionais",
        text: "Urbano, interurbano e shuttle",
      },
      {
        value: "4",
        suffix: "",
        title: "Províncias",
        text: "Luanda, Benguela, Huambo, Lobito",
      },
    ],
  },
  noticia: {
    badge: "DESTAQUE",
    date: "02 SET 2026",
    title: "Políticas e Procedimentos de Utilização do Cartão Multiviagens — Rede Express",
    excerpt:
      "O Cartão Multiviagens foi criado para tornar as suas viagens mais práticas, rápidas e com tarifas bonificadas. Conheça os termos de utilização e as modalidades disponíveis.",
    category: "BILHÉTICA DIGITAL",
    views: "77",
    cta: "Ler mais",
    ctaHref: "/noticias/cartao-multiviagens-rede-express",
    imageHint: "Card com Cartão Multiviagens Rosalina Express em destaque sobre fundo vermelho escuro, texto branco",
  },
  contato: {
    badge: "CONTACTOS DIRECTOS",
    title: "Fale connosco",
    phones: [
      { label: "Geral", value: "+244 923 521 224" },
      { label: "Comercial", value: "+244 926 919 192" },
      { label: "Front Office Luanda", value: "+244 924 720 533" },
      { label: "Front Office Lobito", value: "+244 929 524 242" },
    ],
    emails: [
      { label: "Geral", value: "geral@rosalinaexpress.com" },
      { label: "Comercial", value: "comercial@rosalinaexpress.com" },
    ],
    whatsapp: {
      label: "WhatsApp",
      number: "+244923521224",
      cta: "Enviar mensagem",
    },
    horario: "Seg-Dom 06:00 — 20:00",
  },
};
