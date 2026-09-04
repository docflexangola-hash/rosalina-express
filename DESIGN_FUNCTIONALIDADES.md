# Design & Funcionalidades — Rosalina Express

> Documento de referência visual e funcional. Destina-se a developers, designers e stakeholders que queiram entender o sistema de design, a estrutura de páginas e o estado actual do projecto.

---

## 1. Visão Geral do Design

**Estilo: "Controlled Maximalist Express"**

O site Rosalina Express adopta uma estética neo-brutalista industrial inspirada em centros de expedição de carga, corredores logísticos de alta velocidade, indicadores de terminais rodoviários e etiquetas de despacho. O design rejeita a esterilidade digital genérica em favor de interfaces hiper-tácteis com identidade visual forte e ângulos duros.

### Pilares Fundamentais

- **Cinetismo Controlado:** elementos transmitem velocidade física através de ângulos rectos rígidos, faixas de tracking, ribbons de rota e geometria offset industrial.
- **Semântica de Frete & Wayfinding:** hierarquia visual emula etiquetas de carga, painéis de terminais, códigos de manifesto e marcadores internacionais de envio.
- **Peso Inabalável:** elementos ancorados por bordas pesadas de 2px a 4px em navy (`#0c1a3b`) e sombras duras sem blur (`4px 4px 0px 0px #0c1a3b`).
- **Audiência-alvo:** operadores de frota, dispatchers, gestores logísticos e consumidores modernos que exigem velocidade absoluta, tracking transparente e interações decisivas.

---

## 2. Paleta de Cores

A paleta combina navies industriais profundos com vermelhos de alta urgência sobre um fundo quase-branco, preservando alta legibilidade mesmo em densidade visual máxima.

### Cores Principais

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#81041e` | Accent profundo, destaques críticos |
| `primary-container` | `#A22332` | CTAs primários, botões activos, badges |
| `secondary` | `#4959a6` | Cards informativos, navegação secundária |
| `secondary-container` | `#9cacff` | Tags auxiliares |
| `tertiary` | `#2e3976` | Fundos navy, headers estruturais |
| `tertiary-container` | `#46518f` | Variações navy |
| `on-surface` | `#0c1a3b` | Texto, bordas, sombras — cor estrutural |
| `on-surface-variant` | `#584141` | Texto secundário |
| `on-background` | `#0c1a3b` | Footer navy |

### Cores de Superfície

| Token | Hex | Uso |
|-------|-----|-----|
| `surface` | `#faf8ff` | Fundo principal — quase branco com toque lilás |
| `surface-container-lowest` | `#ffffff` | Cards, superfícies limpas |
| `surface-container-low` | `#f2f3ff` | Superfícies alternadas |
| `surface-container` | `#eaedff` | Superfícies elevadas |
| `surface-container-high` | `#e2e7ff` | Tags, separadores |
| `surface-container-highest` | `#dae1ff` | Headers de tabela |
| `surface-variant` | `#dae1ff` | Variante de superfície |

### Cores de Estado

| Token | Hex | Uso |
|-------|-----|-----|
| `error` | `#ba1a1a` | Mensagens de erro |
| `error-container` | `#ffdad6` | Fundo de erros |
| `outline` | `#8c7070` | Bordas neutras |
| `outline-variant` | `#e0bfbe` | Separadores suaves |

---

## 3. Tipografia

A escala tipográfica combina display de alta velocidade com precisão de engenharia.

### Famílias

| Fonte | Uso | Pesos | Via |
|-------|-----|-------|-----|
| **Anybody** | Headlines, display, títulos de secção | 700, 800, 900 | `next/font/google` |
| **Space Grotesk** | Corpo de texto, parágrafos | 400, 500, 700 | `next/font/google` |
| **JetBrains Mono** | Labels, códigos, badges, datas, manifestos | 600, 700 | `next/font/google` |
| **Material Symbols** | Ícones | Outlined | Google Fonts CSS |

### Escala

| Token | Tamanho | Peso | Família | Tracking |
|-------|---------|------|---------|----------|
| `text-display-hero` | 2.75rem (44px) | 900 | Anybody | -0.02em |
| `text-headline-lg` | 2rem (32px) | 800 | Anybody | -0.02em |
| `text-headline-md` | 1.5rem (24px) | 800 | Anybody | - |
| `text-headline-sm` | 1.125rem (18px) | 800 | Anybody | - |
| `text-body-lg` | 1.125rem (18px) | 500 | Space Grotesk | - |
| `text-body-md` | 1rem (16px) | 400 | Space Grotesk | - |
| `text-body-sm` | 0.875rem (14px) | 400 | Space Grotesk | - |
| `text-label-code` | 0.6875rem (11px) | 700 | JetBrains Mono | 0.06em |
| `text-label-tracking` | 0.6875rem (11px) | 600 | JetBrains Mono | 0.1em |

### Convenções

- Headlines em **uppercase** para ecoar liveries de express e painéis de partida
- Labels de data/hora em **JetBrains Mono** para alinhamento tabular perfeito
- Headings com **letter-spacing negativo** (-0.02em) para densidade visual

---

## 4. Sistema de Sombras Neo-Brutal

O design descarta completamente sombras suaves e blur em favor de **Sombras Duras Isométricas Neo-Brutais**.

### Arquitectura de Sombra

```
Padrão (default):
  box-shadow: 4px 4px 0px 0px #0c1a3b;
  border: 2px solid #0c1a3b;

Hover (elevação):
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #0c1a3b;

Active/Pressed (depressão total):
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px #0c1a3b;
```

### Camadas

- **Primary Elevation** — 4px offset com 2px border
- **Hover Elevation** — elemento sobe 2px diagonal, sombra expande para 6px
- **Active State** — elemento afunda 4px diagonal, sombra desaparece (feedback tátil)
- **Card Brutal** — class utilitária que aplica todas as transições automaticamente

---

## 5. Formas e Geometria

A linguagem de formas usa arquitectura industrial **rigorosa sem arredondamento**.

- **Zero-Radius Primitives:** botões, cards, tooltips e badges têm cantos rectos estritos (90°).
- **Clipes 45°:** tags de prioridade, conectores origem-destino e flags de desconto usam `clip-path: polygon()` com ângulos de 45° para emular etiquetas de bagagem perfuradas.
- **Acentos de Velocidade:** headers de secção com glyphs 15° e chevrons diagonais triplos (`///`) derivados da aerodinâmica de asa de avião.

---

## 6. Arquitectura de Layout

### Breakpoints

- **Mobile:** 320px+
- **Tablet:** 768px+ (`sm:`)
- **Desktop:** 1024px+ (`lg:`)
- **Large:** 1280px+ (`xl:`)

### Grid

- **Desktop (1200px+):** grid rígido de 12 colunas com gutters de 24px e safe margins de 32px.
- **Tablet (768px–1199px):** 8 colunas com gutters de 16px e margens de 24px.
- **Mobile (320px–767px):** 4 colunas com gutters de 12px e margens de 16px.

### Container

- `max-w-7xl` (80rem) para secções principais
- `px-4 sm:px-6 lg:px-8` para padding responsivo
- Sections separadas por `border-b-4 border-on-surface` (linha horizontal de 4px)

### Tokens de Espaçamento

| Token | Valor |
|-------|-------|
| `space-3xs` | 0.125rem (2px) |
| `space-2xs` | 0.25rem (4px) |
| `space-xs` | 0.5rem (8px) |
| `space-sm` | 0.75rem (12px) |
| `space-md` | 1rem (16px) |
| `space-lg` | 1.5rem (24px) |
| `space-xl` | 2rem (32px) |
| `space-2xl` | 3rem (48px) |
| `space-3xl` | 4rem (64px) |

---

## 7. Páginas e Funcionalidades

### 7.1 Homepage (`/`)

Componentes pela ordem de renderização:

| # | Componente | Descrição |
|---|-----------|-----------|
| 1 | **AcaoPrincipal** | Hero com imagem lateral `autocarros.jpg`, título, parágrafo descritivo e 4 botões de acção (Ver Rotas → Reservar Bilhete → Rastrear → Sobre Nós). Botões 1-2 em vermelho, 3-4 em navy. |
| 2 | **StatsRibbon** | Banner com métricas reais: 169 viaturas, 27 rotas, 6 cidades, 9.800 viaturas reduzidas. Números animados via `AnimatedNumber` com suporte decimal. |
| 3 | **SobrePreview** | Secção institucional com imagem `motoristas.jpg`, texto sobre o Grupo, 2 cards de features (Segurança Padrão, Pontualidade Militar). CTA "Saiba Mais Sobre Nós". |
| 4 | **ServicosGrid** | Grid de 5 serviços (Voltas, Rede Express, Shuttles, Aluguer, Personalizado) + 1 card de despacho de cargas. Grid responsivo 1→2→3 colunas. |
| 5 | **Beneficios** | Secção navy com 3 benefícios numerados (Conforto, Segurança, Pontualidade). Cards brancos com ícones e tags. |
| 6 | **TerminaisRede** | Lista de 6 terminais reais (Luanda, Benguela, Lobito, Bengo, Mutamba, Lubango) + mapa do Google Maps. |
| 7 | **NoticiasGrid** | 3 notícias com imagem, categoria, data, título, excerpt e CTA "Ler Comunicado". |
| 8 | **CtaFinal** | CTA final vermelho com botão para `/rastreamento` e telefone de contacto. |

**Funcionalidades-chave:**
- Navegação directa para 4 destinos primários via hero buttons
- Visualização de métricas operacionais reais animadas
- Acesso rápido a terminais via lista com moradas
- Telefone de contacto clicável (`tel:`)

---

### 7.2 Página de Serviços (`/servicos`)

| Componente | Descrição |
|-----------|-----------|
| **SubHeader** | Breadcrumb + título da página |
| **RedeExpress** | Conceito 2026: stats de impacto (-9.800 viaturas), 3 benefícios (Rapidez, Segurança, Conforto), horário (Seg-Sex 5h-20h), novidade 24h em 3 turnos a partir de Maio 2026 |
| **VoltasUrbanas** | Stats reais (169/27/6), 6 cards de cidade (Lobito, Benguela, Bengo, Mutamba-Luanda, Luanda, Lubango) com rotas e marcas |
| **Shuttles** | 4 serviços corporativos: Shuttle Corporativo, Viagens de Negócios, Rotas Industriais, Logística de Eventos |
| **Cargas** | 4 serviços: Carga Expressa, Encomendas, Documentos, Logística Fechada |
| **Garantia** | 4 garantias: Certificação MINTRANS, Pontualidade Real, Seguro Completo, Apoio 24/7 |
| **CtaServicos** | CTA final para reserva de bilhetes |

---

### 7.3 Rastreamento (`/rastreamento`)

| Componente | Descrição |
|-----------|-----------|
| **SubHeader** | Clock em tempo real (Luanda timezone), badges de telemetria (V4.8), stats de pontualidade animados (98.4%, 64 UNID, 100% ATIVO) |
| **BuscaRadar** | Tabs "Bilhete" e "Carga" com input e sugestões rápidas. Tabs com `flex-wrap` para mobile |
| **RadarTelemetria** | Mapa radar interactivo com 5 marcadores de km (0-620), posição de viaturas em tempo real, gauges de telemetria (velocidade 88km/h, temperatura 21.5°C, distância 278km, ETA 16:25) |
| **QuadroHorarios** | Tabela de 5 partidas com filtros por cidade, estados visuais (Embarque, No Horário, Em Trânsito, Portas Fechadas), legenda de cores. 8 colunas com scroll horizontal em mobile |
| **RedeVoltas** | 4 linhas urbanas (101-104) com ETA em tempo real (countdown decrescente), ocupação, fleet size |
| **Suporte** | 3 métricas (Resposta < 3 min, Reagendamento grátis, Central directa) + 3 CTAs (WhatsApp, Telefone, Política) |

**Funcionalidades-chave:**
- Clock ao vivo com timezone Luanda
- ETA countdown por linha (atualiza a cada 60 segundos)
- Pesquisa de bilhete/carga com input dinâmico
- Filtros de cidade na tabela de horários
- Mapa radar visual com marcadores posicionados

---

### 7.4 Booking Flow (`/booking`)

Flow em 3 passos com persistência de estado via `BookingContext` + `localStorage`.

#### Passo 1: SelecaoRota (`/booking`)

- 6 cidades reais disponíveis (LUANDA, BENGUELA, LOBITO, LUBANGO, BENGO, MUTAMBA)
- 6 rotas pré-definidas com horários reais (ex: VOL-LU-01 Luanda→Zango 06h00, 45 min, 500 KZ)
- Date picker para data de viagem
- Stepper de passageiros (1-4)
- Lista filtrada de viagens disponíveis com preço, tipo de serviço, viatura
- Botão "Continuar para Assentos"

#### Passo 2: SelecaoAssentos (`/booking/assentos`)

- Mapa de assentos interactivo 2x2 (52 lugares)
- Visualização de assentos ocupados, seleccionados, prioritários
- Formulário completo de passageiro (nome, BI, telefone, email)
- Extras de bagagem (volume extra +15kg, seguro Rosalina)
- 3 métodos de pagamento (Multicaixa Express, Referência, Cartão)
- Breakdown de preço com total animado
- Loading state durante submit
- Error state com mensagem inline

#### Passo 3: Confirmacao (`/booking/confirmacao`)

- Ticket digital com QR code
- Detalhes da viagem (rota, data, assento, passageiro)
- Instruções de embarque
- Botão para download PDF

**BookingContext** (`src/components/booking/BookingContext.tsx`):
- Estado global via React Context
- Persistência em `localStorage` (chave `rosalina.booking.v1`)
- Reset disponível
- 11 campos: routeId, data, passageiros, passengerName, passengerBI, passengerPhone, passengerEmail, seat, baggageExtras, paymentMethod, totalKz

---

### 7.5 Página Sobre Nós (`/sobre`)

| Componente | Descrição |
|-----------|-----------|
| **SubHeader** | Breadcrumb + título "Sobre Nós" |
| **HeroSede** | Apresentação principal com imagem da sede |
| **Timeline** | Cronologia histórica da empresa |
| **Segmentos** | 4 áreas de negócio (Transportes, Hotelaria, Restauração, Combustíveis) |
| **Liderança** | Cards da equipa de liderança |
| **Certificacoes** | Certificações e homologações (MINTRANS, etc.) |
| **CtaInstitucional** | CTA para contacto corporativo |

---

### 7.6 Página de Contacto (`/contato`)

| Componente | Descrição |
|-----------|-----------|
| **SubHeader** | Breadcrumb + título |
| **InfoCards** | Cards com canais de contacto (telefone, email, WhatsApp) |
| **Terminais** | Lista visual dos 6 terminais com moradas |
| **FormContacto** | Formulário completo (nome, email, telefone, assunto, mensagem) com validação |
| **Faq** | Perguntas frequentes em accordion |
| **MapaRota** | Mapa Google com morada da sede central |

---

### 7.7 Página de Notícias (`/noticias`)

- **Listagem** (`/noticias`): grid de notícias com filtro por categoria
- **Artigo individual** (`/noticias/[slug]`): página de leitura com header, corpo de texto, autor, data, partilha social

**Funcionalidades:**
- Cards de notícia com imagem, categoria, data, título, excerpt
- Contador de visualizações
- CTA "Ler Comunicado" para artigo completo
- Layout de leitura optimizado com tipografia generosa

---

## 8. Stack Técnica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router, Turbopack) | 15.x |
| UI | React + TypeScript | 19.x |
| Estilo | Tailwind CSS | 4.x |
| CMS | Sanity (headless) | v3 |
| Formulários | React Hook Form + Zod | — |
| Ícones | Material Symbols (Google Fonts) | Outlined |
| Fonts | Anybody + Space Grotesk + JetBrains Mono | Via `next/font/google` |
| Animações | CSS keyframes + IntersectionObserver | — |
| Deploy | Vercel | — |

### Bibliotecas Custom

- `Reveal` — animação de entrada com IntersectionObserver (client component, com SSR fallback)
- `AnimatedNumber` — contagem animada com easeOut cubic
- `MaterialIcon` — wrapper para Material Symbols
- `BookingContext` — state management para booking flow com localStorage

---

## 9. Estrutura de Pastas

```
rosalina-express/
├── public/
│   ├── logo3.webp          (logo principal 7.5 KB)
│   ├── favicon.png         (logo reduzido para browsers 422 KB)
│   ├── autocarros.jpg      (hero image)
│   ├── motoristas.jpg      (sobre preview image)
│   └── (svgs default Next.js)
├── sanity/
│   ├── sanity.config.ts
│   ├── schemaTypes/        (noticia, rota, servico, terminal, configuracoes)
│   └── lib/                (client, queries)
├── src/
│   ├── app/                (App Router, 8 páginas + booking flow)
│   ├── components/
│   │   ├── layout/         (Header, Footer, MobileMenu)
│   │   ├── ui/             (Reveal, AnimatedNumber)
│   │   ├── home/           (AcaoPrincipal, StatsRibbon, SobrePreview, etc.)
│   │   ├── sobre/          (SubHeader, Timeline, etc.)
│   │   ├── servicos/       (RedeExpress, VoltasUrbanas, Shuttles, Cargas)
│   │   ├── rastreamento/   (SubHeader, BuscaRadar, RadarTelemetria, etc.)
│   │   ├── contato/        (SubHeader, Terminais, FormContacto, etc.)
│   │   ├── noticias/       (SubHeader, Lista)
│   │   └── booking/        (BookingContext, SelecaoRota, SelecaoAssentos, etc.)
│   ├── content/            (dados estáticos: home, servicos, booking, etc.)
│   ├── lib/                (sanity clients, hooks)
│   └── styles/
│       └── globals.css     (tokens, utilities, animations)
├── AGENTS.md               (regras para AI agents)
├── DESIGN_FUNCTIONALIDADES.md  (este ficheiro)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Estado Actual do Projecto

### ✅ Completo

- **Design system** neo-brutal completo com tokens, shadows, tipografia
- **8 páginas** implementadas com dados reais
- **Homepage** com 4 botões de acção, stats reais (169/27/6/9800), terminais reais
- **Serviços** com conteúdo real (Rede Express 2026, Voltas com 6 cidades)
- **Rastreamento** com clock live, radar, tabela de horários, monitorização Voltas
- **Booking flow** em 3 passos com 6 rotas reais e persistência
- **Páginas institucionais** (Sobre, Contacto, Notícias)
- **Responsividade** P0/P1/P2 aplicada (mobile, tablet, desktop)
- **Favicon** com logoredu.png para tab dos browsers
- **SEO metadata** base configurado (title, description, icons, apple-touch)
- **TypeScript strict** sem erros
- **ESLint** sem erros

### 🔄 Em progresso

- Conteúdo real das páginas Sobre, Contacto (alguns dados ainda placeholder)
- Imagens de notícias usando proxy Google (lh3.googleusercontent.com)

### 📋 Por fazer (Fase 10)

- Popular **Sanity Studio** com conteúdo real
- **API Routes** (contacto, booking, rastreamento) — endpoints backend
- **Metadata avançada** por rota (OpenGraph, Twitter Cards)
- **Sitemap.ts** e **robots.ts**
- **Build de produção** (`npm run build`) — user deve correr
- **Deploy para Vercel** com domínio custom
- **PWA setup** (manifest.json, service worker)
- **Testes E2E** (Playwright)
- **Monitorização** (Vercel Analytics, Sentry)

---

## 11. Convenções de Código

- **Server Components** por defeito (App Router)
- **`"use client"`** apenas para componentes interactivos (forms, toggles, relógios, BookingContext)
- **Tailwind CSS** para todo o estilo — sem CSS inline excepto sombras neo-brutal
- **Componentes** organizados por secção (`/components/home/`, `/components/servicos/`, etc.)
- **Dados estáticos** em `src/content/*.ts` (não hardcoded nos componentes)
- **Ícones** Material Symbols via `<MaterialIcon name="..." />`
- **Dados reais** sobre dados fictícios sempre que possível
- **TS strict** sem `any` excepto onde necessário
- **TS interfaces explícitas** para props complexas
- **Comentários proibidos** (apenas quando estritamente necessário)

---

## 12. Métricas Operacionais Reais

Dados usados no site, extraídos do site real `rosalinaexpress.com`:

| Métrica | Valor | Contexto |
|---------|-------|----------|
| Frota total | 169 viaturas | Activa em 6 cidades |
| Rotas operacionais | 27 | Conexões urbanas e interurbanas |
| Cidades servidas | 6 | Luanda, Benguela, Lobito, Lubango, Mutamba, Bengo |
| Impacto Voltas Luanda | -9.800 viaturas | Reduzidas nas horas de ponta |
| Telefone central | +244 923 521 224 | Sede Luanda |
| Email geral | geral@rosalinaexpress.com | — |
| Email comercial | comercial@rosalinaexpress.com | — |
| Sede | Central Rodoviária - Rede Express, Av. Ho Chi Minh, Luanda | — |
| Horário Rede Express | Seg-Sex 5h-20h | Sáb/Dom não funciona (ainda) |
| Novidade 2026 | Operação 24h em 3 turnos a partir de Maio 2026 | — |

---

## 13. Glossário

- **AcaoPrincipal** — secção hero da homepage
- **BookingContext** — estado global do flow de reserva com localStorage
- **Reveal** — componente de animação de entrada via IntersectionObserver
- **Viatura** — termo português para veículo/automóvel
- **Voltas** — sistema urbano de transporte da Rosalina Express
- **Rede Express** — serviço interurbano de alta frequência (conceito 2026)
- **AWB** — Air Waybill (código de rastreamento de carga)
- **Multicaixa** — sistema de pagamento angolano (referência + Express)
- **EMIS** — Entidade Multissectorial de Sistemas de Pagamentos de Angola
- **MINTRANS** — Ministério dos Transportes de Angola
- **NIB** — Número de Identificação Bancária
- **BI** — Bilhete de Identidade (documento angolano)

---

**Versão:** 2026-09-04
**Mantido por:** Equipa de desenvolvimento Rosalina Express
**Próxima revisão:** após deploy em produção
