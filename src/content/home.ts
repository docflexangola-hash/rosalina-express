const img = {
  newsMultiviagens:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAy5IR4FrwfJWrbEayBa90E6hGWMeIIK__357aIXsRE3qJnHgf9ehDRepMXK4GbiogTrbj4Z3t2y-XctNFnFchGl4pfdw9o0kCHVWiLWirRELkx2c8yvWw1EFu2ttI1t3hsAm5RnM_LgtyYKZfEQBth8UoHPgyIHjL7LDOLyYxUdfMc3iFWDD420i94oAy-y6Nu9jamPdvGhSolk4MHTjP4SF6zpO7K0M7VSfEkgPup-4pi14JYVCNrA",
  newsCallCenter:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj7vCF59VJVc3bJ2Ah9g_1FBBl-XQTp-CXgh9LUlhpKkJOA_-XR94S8yKJKLryE0kZIYb-QZt1wiI3KbA2H6ukRvbpi4gTp1Cfz8ipwaUf-d5S7xKOGtIokcc-Snxs-ApCf5DqkoLQOrhb22HibYvR2WDEmNeoOmvdH1esmHyVY-bdypXSLzuboB97WT_f7-30W0LRv5nhG4Wij6XIcotUKcTmAc6ipw_2b_RG3Ktnd4FskTWCP3oPHw",
  newsHighway:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAAGjSb-kTo2hX2YB4pRE3e_9M5CC-Le8qMbPQS_xX5QNXnD97OIxwlQPl7qAaHBaTMzA4EFKE-Qdiri7po4QMx4_6bkmPVgMy1hO4EG3YyaPBOa9gifcvAHH6VUrlcSUXWoCN3pOOeNP3W_4XPitgXcOmnLn2l13G1MkAuW-yKbkxKLNfrMZhZPMP5O_FiZ9CCr0lU0SbgfDyVNXMO6KyzJ88ixPZuGogpCE9EEAIZaen9ySA_w9gQ-g",
  mapCentral:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEaFd5zGn8QRnkNynSgRntTlZN0mvLZ7y7SSSb2Ijrk6A-x65VTThguKNe1Xzmst_cpfyqZ8rhQrX6Ci2AGy75IlVfJd_AXLgSqW6IiH0GswndJyY95l-MuNqIa_bla-_-Kffe093r-iC5ypcdbzze52hZRash4iHS6380R3oMF9yTmgNCx3TPMy4jsSLdnnY8N79uH4DJOycnK2C_xsdXOGnWeBdxLe46_Tiy1NXIfqPm6Ov0WYk02Q",
};

export const homeContent = {
  acaoPrincipal: {
    badge: "GRUPO ROSALINA EXPRESS",
    title: "Transporte rápido e seguro em Angola",
    paragraph:
      "Mais de 20 anos a conectar Luanda, Benguela, Huambo e Lobito. Frota moderna, motoristas profissionais, rastreamento em tempo real e atendimento 24/7. Reserve a sua viagem ou rastreie a sua encomenda agora mesmo.",
    buttons: [
      {
        label: "Reservar Bilhete",
        icon: "confirmation_number",
        href: "/booking",
        bg: "primary-container",
      },
      {
        label: "Rastrear Viagem / Encomenda",
        icon: "gps_fixed",
        href: "/rastreamento",
        bg: "tertiary",
      },
      {
        label: "Sobre Nós",
        icon: "info",
        href: "/sobre",
        bg: "primary-container",
      },
    ],
  },
  hero: {
    tag: "HUB CENTRAL // EXPEDIÇÃO & REDE EXPRESS",
    titleTop: "CONECTANDO",
    titleAccent: "ANGOLA",
    titleBottom: "COM MÁXIMA PRECISÃO.",
    description:
      "Mais de 20 anos garantindo viagens regulares interurbanas, linhas expressas e soluções corporativas pontuais com padrão militar de operação.",
    widgetTag: "TERMINAL TICKET V.04",
    services: [
      { value: "express", label: "Rede Express Interurbana" },
      { value: "voltas", label: "Voltas & Conexões Urbanas" },
      { value: "shuttle", label: "Shuttle Executivo VIP" },
      { value: "frotas", label: "Aluguer / Frotas Dedicadas" },
    ],
    microBar: {
      base: "BASE CENTRAL: LUANDA HO CHI MINH",
      frota: "FROTA ATIVA: 100%",
      despachos: "DESPACHOS: 06:00 - 20:00",
    },
  },
  heroBoard: {
    corridorRef: "RODO-CORRIDOR-A1",
    programTitle: "METRO-BUS & EXPRESS",
    status: "EM ROTA",
    image: img.newsMultiviagens,
    imageTagline: "VIP COMFORT CLASS",
    fleetLabel: "FROTA MARCOPOLO G7 / SCANIA",
    routes: [
      {
        label: "EIXO PRINCIPAL",
        value: "LUANDA — BENGUELA",
        saídas: "SAÍDAS: 06:00 | 08:30 | 14:00",
      },
      {
        label: "EIXO PLANALTO",
        value: "LUANDA — HUAMBO",
        saídas: "SAÍDAS: 06:30 | 12:00",
      },
    ],
    stats: [
      { icon: "groups", value: "20", label: "Passageiros" },
      { icon: "storefront", value: "25+", label: "Parques" },
      { icon: "route", value: "50", label: "Linhas" },
      { icon: "map", value: "4", label: "Províncias" },
    ],
  },
  statsRibbon: {
    label: "MÉTRICAS OPERACIONAIS — FROTA ATIVA EM ANGOLA",
    cert: "OPERAÇÃO EM TEMPO REAL 2026",
    items: [
      {
        value: "169",
        title: "Viaturas em Circulação",
        text: "Frota activa em 6 cidades: Luanda, Benguela, Lobito, Lubango, Mutamba e Bengo.",
      },
      {
        value: "27",
        title: "Rotas Operacionais",
        text: "Conexões urbanas e interurbanas com frequências regulares de 5 a 40 minutos.",
      },
      {
        value: "6",
        title: "Cidades Servidas",
        text: "Cobertura metropolitana Voltas + Rede Express interurbana em Luanda.",
      },
      {
        value: "9.800",
        title: "Viaturas Reduzidas",
        text: "Menos veículos individuais nas horas de ponta com a Rede Express Luanda.",
      },
    ],
  },
  sobre: {
    badge: "Sobre Nós — Institucional",
    titleTop: "Grupo",
    titleAccent: "Rosalina Express",
    image: "/autocarros.jpg",
    imageFrameLabel: "GRUPO ROSALINA",
    imageFrameTag: "PATRIMÓNIO NACIONAL",
    cardTitle: "Elegância, Requinte & Conforto",
    cardText:
      "Segurança ativa com motoristas credenciados e sistemas de telemática via satélite em 100% da frota.",
    ribbon: "DESDE 2004 EM ANGOLA",
    paragraphs: [
      "A <strong>Rosalina Express</strong> é um grupo empresarial de referência em Angola, atuando nos segmentos de <strong>transportes</strong>, <strong>hotelaria</strong>, <strong>restauração</strong> e <strong>combustíveis</strong>.",
      "Com o <strong>core business</strong> focado no transporte de passageiros, oferecemos uma vasta gama de serviços que incluem transportes públicos urbanos e interurbanos, shuttle empresarial, aluguer de viaturas, logística de cargas e muito mais.",
    ],
    features: [
      {
        icon: "verified_user",
        title: "Segurança Padrão",
        text: "Manutenção rigorosa preventiva",
      },
      {
        icon: "nest_clock_farsight_analog",
        title: "Pontualidade Militar",
        text: "Cumprimento rígido de partidas",
      },
    ],
    ctaLabel: "Saiba Mais Sobre Nós",
    regLabel: "100% REGISTRADO NO MINTRANS",
  },
  servicos: {
    badgeLabel: "CATÁLOGO DE OPERAÇÕES",
    title: "Soluções de Transporte para Todos",
    description:
      "Do transporte público urbano aos serviços corporativos personalizados, temos a infraestrutura exata para sua necessidade.",
    ctaLabel: "Ver Todos os Serviços",
    items: [
      {
        tag: "LINHA 01 // URBANO",
        icon: "sync_alt",
        title: "Voltas",
        description:
          "Transporte público urbano com rotas estratégicas e horários regulares para sua comodidade diária na capital e centros provinciais.",
        footerTag: "ROTAS URBANAS",
        featured: false,
      },
      {
        tag: "LINHA 02 // EXPRESSO",
        icon: "electric_bolt",
        title: "Rede Expresso",
        description:
          "Viagens interurbanas e intraurbanas rápidas, confortáveis e seguras para todo Angola, com climatização integral e segurança reforçada.",
        footerTag: "INTERURBANO",
        featured: true,
        recommended: "RECOMENDADO",
      },
      {
        tag: "LINHA 03 // CORPORATIVO",
        icon: "airport_shuttle",
        title: "Shuttles",
        description:
          "Serviço executivo com veículos premium, incluindo rádio táxi corporativo, transfers para aeroportos e soluções de mobilidade sob contrato.",
        footerTag: "EXECUTIVE VIP",
        featured: false,
      },
      {
        tag: "LINHA 04 // FROTA LIVRE",
        icon: "car_rental",
        title: "Aluguer",
        description:
          "Frota diversificada de 5 a 75 lugares disponível para eventos, empresas, excursões, delegações e ocasiões com ou sem motorista privativo.",
        footerTag: "5 A 75 LUGARES",
        featured: false,
      },
      {
        tag: "LINHA 05 // TAILOR-MADE",
        icon: "verified",
        title: "Serviços Personalizados",
        description:
          "Soluções VIP sob medida: transfers aeroporto, recepção protocolar em delegações de estado, apoio logístico a megaeventos desportivos e feiras.",
        footerTag: "PROTOCOLAR & VIP",
        featured: false,
      },
    ],
    dispatch: {
      label: "CARGA & ENCOMENDAS",
      title: "Despacho Expresso Diário",
      description:
        "Envio rápido de encomendas e volumes comerciais entre Luanda, Benguela, Lobito e Huambo com recolha garantida em até 24 horas no destino.",
      cta: "Despachar Encomenda Agora",
    },
  },
  beneficios: {
    badge: "DIFERENCIAIS COMPETITIVOS",
    title: "Por que escolher a Rosalina Express?",
    description:
      "Líder em transporte de passageiros em Angola com conforto, segurança e compromisso inegociável de pontualidade.",
    items: [
      {
        num: "01",
        icon: "airline_seat_recline_extra",
        title: "Viagens Confortáveis",
        text: "Autocarros modernos e confortáveis para garantir a melhor experiência de viagem. Poltronas reclináveis, ar-condicionado de alta potência e tomadas USB a bordo.",
        tag: "PADRÃO INTERNACIONAL VIP",
      },
      {
        num: "02",
        icon: "health_and_safety",
        title: "Segurança Total",
        text: "Motoristas profissionais com formação contínua e veículos rigorosamente revisados para sua tranquilidade absoluta nas estradas nacionais.",
        tag: "FROTA 100% RASTREADA",
      },
      {
        num: "03",
        icon: "schedule",
        title: "Pontualidade de Referência",
        text: "Padrão militar de partidas e chegadas, com monitorização em tempo real e comunicação transparente em cada etapa do seu trajeto.",
        tag: "EXPEDIÇÃO 06H00 - 20H00",
      },
    ],
  },
  terminais: {
    label: "TERMINAIS & CORREDORES",
    title: "Rede de Cobertura Rodoviária Nacional",
    badges: ["6 POLOS ATIVOS", "FROTA 169 VIATURAS"],
    list: [
      {
        hub: "HUB 01 // PRINCIPAL",
        city: "LUANDA",
        name: "Central Rodoviária Ho Chi Minh",
        address: "Av. Ho Chi Minh, Central Rede Express, Luanda",
        icon: "call",
        info: "+244 923 521 224",
        primary: true,
      },
      {
        hub: "HUB 02 // SUL",
        city: "BENGUELA",
        name: "Terminal Central de Benguela",
        address: "Av. da Independência, Plataforma Rosalina, Benguela",
        icon: "directions_bus",
        info: "Rotas BG5 – Benfica, Benfica – Mira Mar",
        primary: false,
      },
      {
        hub: "HUB 03 // PLANALTO",
        city: "LOBITO",
        name: "Terminal do Lobito",
        address: "Terminal Metropolitano, Lobito",
        icon: "directions_bus",
        info: "6 rotas activas • 37 viaturas",
        primary: false,
      },
      {
        hub: "HUB 04 // LITORAL",
        city: "BENGO",
        name: "Terminal de Caxito",
        address: "Caxito, Província do Bengo",
        icon: "directions_bus",
        info: "3 rotas: Sassa – Kifangondo, Mabubas – Açucareira",
        primary: false,
      },
      {
        hub: "HUB 05 // METROPOLITANO",
        city: "MUTAMBA",
        name: "Estação de Mutamba",
        address: "Maianga / Kinaxixi / Sagrada → Mutamba, Luanda",
        icon: "directions_bus",
        info: "26 viaturas • 3 rotas activas",
        primary: false,
      },
      {
        hub: "HUB 06 // SUL ALTO",
        city: "LUBANGO",
        name: "Terminal do Lubango",
        address: "Estátua da Liberdade, Lubango",
        icon: "directions_bus",
        info: "8 rotas • 20 viaturas • Humpata",
        primary: false,
      },
    ],
    mapTitle: "LOCALIZAÇÃO CENTRAL LUANDA",
    mapCoord: "COORD: -8.8383° S, 13.2344° E",
    mapImage: img.mapCentral,
    mapBadge: "BASE MATRIZ",
    mapCardTitle: "Central Rede Express",
    mapCardText:
      "Venda directa de bilhetes, rastreamento de cargas e partida de comboios rodoviários Rede Express Luanda.",
    mapFooterText:
      "Terminal com parqueamento seguro, sala VIP climatizada e atendimento presencial das 5h00 às 20h00",
    mapsLink: "https://maps.google.com/?q=Central+Rodovi%C3%A1ria+Rede+Express+Luanda",
  },
  noticias: {
    badge: "COMUNICADOS OFICIAIS",
    titleTop: "Últimas",
    titleAccent: "Notícias",
    description:
      "Fique por dentro das novidades, atualizações de bilhética e comunicados operacionais da Rosalina Express.",
    ctaLabel: "Ver Todas as Notícias",
    items: [
      {
        image: img.newsMultiviagens,
        category: "BILHÉTICA DIGITAL",
        categoryTone: "primary",
        date: "02 SET 2026",
        title:
          "Políticas e Procedimentos de Utilização do Cartão Multiviagens — Rede Express",
        excerpt:
          "O Cartão Multiviagens da Rede Express foi criado para tornar as suas viagens mais práticas, rápidas e com tarifas bonificadas para passageiros frequentes.",
        views: "75",
        href: "/noticias/cartao-multiviagens-rede-express",
      },
      {
        image: img.newsCallCenter,
        category: "ATENDIMENTO AO CLIENTE",
        categoryTone: "secondary",
        date: "29 JUL 2026",
        title: "Linhas de Apoio e Canais Oficiais de Frontoffice Atualizados",
        excerpt:
          "Reforçámos as equipas de resposta imediata para emissão de bilhetes corporativos, reservas antecipadas e gestão de encomendas interprovinciais.",
        views: "76",
        href: "/noticias/linhas-de-apoio-frontoffice",
      },
      {
        image: img.newsHighway,
        category: "NOVAS FREQUÊNCIAS",
        categoryTone: "primary",
        date: "15 JUL 2026",
        title: "Novos Horários de Madrugada na Linha Luanda — Benguela",
        excerpt:
          "Para responder à crescente procura comercial, adicionámos a partida expresso das 05h30 com serviço de pequeno-almoço e conexão direta ao Porto do Lobito.",
        views: "112",
        href: "/noticias/novos-horarios-luanda-benguela",
      },
    ],
  },
  cta: {
    badge: "RESERVA IMEDIATA DE VIAGEM & CARGA",
    title: "PRONTO PARA VIAJAR COM A LÍDER NACIONAL?",
    description:
      "Compre o seu bilhete online em segundos ou contacte a nossa central para reservas de grupos, fretamento e transporte de cargas. Frota activa em Luanda, Benguela, Lobito, Bengo, Mutamba e Lubango.",
    primaryCta: "Consultar Horários e Reservar",
    secondaryCta: "Ligar (+244 923 521 224)",
    phone: "+244923521224",
    perks: [
      "BAGAGEM PROTEGIDA ATÉ 25 KG",
      "PAGAMENTO MULTICAIXA EXPRESS",
      "TELEFONE: +244 923 521 224",
    ],
  },
};
