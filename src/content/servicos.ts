export const servicosContent = {
  subHeader: {
    breadcrumb: ["Início", "Serviços & Frotas"],
    badge: "QUATRO UNIDADES DE NEGÓCIO // UMA REDE INTEGRADA",
    title: "Serviços, Frotas & Logística",
    subtitle: "Soluções completas de mobilidade para pessoas, empresas e cargas em Angola",
    line1: "DIRECTORIA OPERACIONAL & DE FROTA",
    line2: "COBERTURA: LUANDA • BENGUELA • HUAMBO",
  },
  redes: {
    badge: "LINHA 01 — REDE EXPRESS NACIONAL",
    title: "Rede Express Interprovincial",
    description:
      "Ligações de alta velocidade entre as principais capitais de província com horários rígidos, conforto VIP e telemetria satelital em toda a frota.",
    features: [
      {
        icon: "schedule",
        title: "Partidas Rigorosas",
        text: "Horários sincronizados por telemetria; tolerância zero e pontualidade auditada.",
      },
      {
        icon: "weekend",
        title: "Conforto Cama-Viagem",
        text: "Poltronas reclináveis 160°, ar-condicionado e apoio de pernas em autocarros Scania/Volvo.",
      },
      {
        icon: "shield",
        title: "Segurança Máxima",
        text: "Dois motoristas em longos percursos, cinto em todos os lugares e revisão a cada 5.000 km.",
      },
      {
        icon: "table_bar",
        title: "Refeições a Bordo",
        text: "Paragens oficiais com serviço rápido de refeição incluído e pontos de hidratação.",
      },
    ],
    rotas: [
      { cidade: "LUANDA", destino: "BENGUELA", duracao: "8h 30m", freq: "3X DIA", cor: "primary" },
      { cidade: "LUANDA", destino: "HUAMBO", duracao: "7h 15m", freq: "2X DIA", cor: "tertiary" },
      { cidade: "BENGUELA", destino: "HUAMBO", duracao: "3h 50m", freq: "4X DIA", cor: "secondary" },
      { cidade: "LUANDA", destino: "LOBITO", duracao: "8h 10m", freq: "2X DIA", cor: "tertiary" },
      { cidade: "HUAMBO", destino: "LOBITO", duracao: "2h 40m", freq: "DAILY", cor: "primary" },
    ],
    cta: "RESERVAR BILHETE EXPRESS",
  },
  voltas: {
    badge: "LINHA 02 — MOBILIDADE URBANA",
    title: "Sistema Metropolitano 'Voltas'",
    description:
      "Circulação urbana integrada em Luanda, ligando os principais corredores e bairros periféricos com alta densidade de frequências.",
    corridors: [
      { rota: "MUTAMBA", vs: "KILAMBA", tag: "CENTRO ↔ SUL", status: "ATIVO" },
      { rota: "VIANA", vs: "CAÇUACO", tag: "INDÚSTRIA ↔ DORMITÓRIO", status: "24H" },
      { rota: "MUTAMBA", vs: "VIANA", tag: "CENTRAL ↔ VIA EXPRESSA", status: "ATIVO" },
      { rota: "KILAMBA", vs: "CAÇUACO", tag: "CIRCULAR EXTERIOR", status: "PLAN" },
    ],
    notas: [
      "Tarifa urbana popular com bilhete pré-pago",
      "Paragens a cada 400 metros nos corredores",
      "Operação das 05h00 às 23h00",
      "Frota dedicada de médios e articulados",
    ],
  },
  shuttles: {
    badge: "LINHA 03 — SOLUÇÕES CORPORATIVAS",
    title: "Shuttles Executivos & Frotas Dedicadas",
    description:
      "Transporte corporativo personalizado para empresas, indústrias e eventos, com condutores treinados e branding nas viaturas.",
    itens: [
      {
        icon: "groups",
        titulo: "Shuttle Corporativo",
        texto: "Transporte diário de colaboradores entre os polos industriais de Viana e o centro de Luanda.",
      },
      {
        icon: "business",
        titulo: "Viagens de Negócios",
        texto: "Serviço dedicado de pontos a pontos para executivos, delegações e investidores.",
      },
      {
        icon: "factory",
        titulo: "Rotas Industriais",
        texto: "Transporte de turnos com horários alinhados à produção em parques fabris.",
      },
      {
        icon: "event",
        titulo: "Logística de Eventos",
        texto: "Apoio a congressos, casamentos e eventos institucionais com operação em escala.",
      },
    ],
    cta: "SOLICITAR PROPOSTA CORPORATIVA",
  },
  cargas: {
    badge: "LINHA 04 — CARGAS & ENCOMENDAS",
    title: "Despacho de Cargas & Encomendas",
    description:
      "Transporte de mercadorias, documentos e encomendas porta-a-porta nas principais rotas nacionais, com rastreamento e avaria zero.",
    servicos: [
      { icon: "inventory_2", titulo: "Carga Expressa", texto: "O dia seguinte garantido entre Luanda e Benguela." },
      { icon: "package_2", titulo: "Encomendas", texto: "Pacotes atá 30 kg com coleta e entrega porta-a-porta." },
      { icon: "document_scanner", titulo: "Documentos", texto: "Malotes e documentos sensíveis com prioridade absoluta." },
      { icon: "warehouse", titulo: "Logística Fechada", texto: "Contratos mensais para empresas e grossistas." },
    ],
    cta: "CONTRATAR TRANSPORTE DE CARGA",
  },
  garantia: {
    label: "COMPROMISSO OPERACIONAL",
    title: "As Nossas Garantias de Serviço",
    items: [
      { icon: "verified", titulo: "Marca Certificada", texto: "Registada e homologada pelo MINTRANS" },
      { icon: "schedule", titulo: "Pontualidade Real", texto: "Despacho ao minuto com controlo satelital" },
      { icon: "shield", titulo: "Seguro Completo", texto: "Todos os bilhetes com seguro de viagem incluído" },
      { icon: "support_agent", titulo: "Apoio 24/7", texto: "Central de assistência no terminal" },
    ],
  },
  cta: {
    badge: "PRONTO PARA VIAJAR?",
    title: "Escolha a Linha e Embarque Connosco",
    text: "Compre o seu bilhete em segundos ou fale com a nossa equipa comercial para frotas dedicadas e cargas.",
    btn1: "RESERVAR BILHETE AGORA",
  },
};
