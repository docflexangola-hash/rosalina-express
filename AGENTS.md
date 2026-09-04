# AGENTS.md — Rosalina Express

> Ficheiro de referência obrigatório. Qualquer agente DEVE ler este ficheiro antes de escrever código.

---

## Regras de Trabalho

| Quem faz o quê | Responsabilidade |
|----------------|------------------|
| **Utilizador** | Instalar dependências (`npm install`, `npm create sanity@latest`, etc.) |
| **Utilizador** | Correr comandos longos (`npm run dev`, `npm run build`, `npm run lint`, `deploy`) |
| **Utilizador** | Criar projecto Next.js (`npx create-next-app@latest`) |
| **Agente** | Criar e editar todos os ficheiros de código |
| **Agente** | Configurar arquivos de configuração (tsconfig, tailwind.config, next.config, etc.) |
| **Agente** | Escrever componentes, schemas, queries, estilos |
| **Agente** | Actualizar LOG.md com o que fez |

**O agente NÃO executa `npm install`, `npm run dev`, `npm run build`, nem qualquer comando que crie, instale ou inicie processos.**

---

## Stack Técnico

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 15.x |
| UI | React + TypeScript | 19.x |
| Estilo | Tailwind CSS | 4.x |
| CMS | Sanity (headless) | v3 |
| Formulários | React Hook Form + Zod | — |
| Ícones | Lucide React + Material Symbols | — |
| Deploy | Vercel | — |
| Fonts | Google Fonts via `next/font` | Anybody, Space Grotesk, JetBrains Mono |

---

## Arquitectura do Projecto

```
rosalina-express/
├── public/
│   ├── logo.webp
│   ├── favicon.ico
│   └── og-image.png
├── sanity/
│   ├── sanity.config.ts
│   ├── schemaTypes/
│   │   ├── index.ts
│   │   ├── noticia.ts
│   │   ├── rota.ts
│   │   ├── servico.ts
│   │   ├── terminal.ts
│   │   └── configuracoes.ts
│   └── lib/
│       ├── client.ts
│       └── queries.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx               # /
│   │   ├── sobre/page.tsx         # /sobre
│   │   ├── servicos/page.tsx      # /servicos
│   │   ├── rastreamento/page.tsx  # /rastreamento
│   │   ├── noticias/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contato/page.tsx
│   │   └── booking/
│   │       ├── page.tsx
│   │       ├── assentos/page.tsx
│   │       └── confirmacao/page.tsx
│   ├── components/
│   │   ├── layout/    (Header, Footer, MobileMenu)
│   │   ├── ui/        (Button, Card, Badge, Input, Select, Table, Stepper, Container)
│   │   ├── home/      (HeroBooking, StatsRibbon, SobrePreview, etc.)
│   │   ├── sobre/     (Timeline, Segmentos, Certificacoes)
│   │   ├── servicos/  (RedeExpress, VoltasUrbanas, Shuttles, AluguerCargas)
│   │   ├── rastreamento/ (RadarOperacoes, TabelaHorarios)
│   │   ├── booking/   (SelecaoRota, SelecaoAssentos, Pagamento)
│   │   └── contato/   (Terminais, FormContacto)
│   ├── lib/
│   │   ├── sanity.ts          # Sanity client (browser)
│   │   ├── sanity-server.ts   # Sanity client (server)
│   │   ├── sanity-image.ts    # URL builder imagens
│   │   └── utils.ts
│   ├── data/
│   │   ├── rotas.json
│   │   ├── terminais.json
│   │   └── servicos.json
│   └── styles/
│       └── globals.css
├── sanity.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.local
```

---

## Design System — Controlled Maximalist Express

> Referência completa: `DESIGN.md` na pasta `stitch_rosalina_express_redesign/stitch_rosalina_express_redesign/controlled_maximalist_express/`

### Cores Principais

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#81041e` | Accent profundo |
| `primary-container` | `#A22332` | CTAs, badges activos, destaques |
| `secondary` | `#4959a6` | Cards info, nav |
| `tertiary` | `#2e3976` | Fundos navy, headers escuros |
| `tertiary-container` | `#46518f` | Variações navy |
| `on-surface` | `#0c1a3b` | Texto, bordas, sombras |
| `on-background` | `#0c1a3b` | Fundo footer navy |
| `surface` | `#faf8ff` | Fundo principal |
| `surface-container-lowest` | `#ffffff` | Cards, fundos limpos |
| `surface-container-low` | `#f2f3ff` | Superfícies alternadas |
| `surface-container` | `#eaedff` | Superfícies elevadas |
| `surface-container-high` | `#e2e7ff` | — |
| `surface-container-highest` | `#dae1ff` | — |
| `error` | `#ba1a1a` | Erros |
| `error-container` | `#ffdad6` | Fundo de erros |

### Sombras Neo-Brutal

```css
/* Padrão */
box-shadow: 4px 4px 0px 0px #0c1a3b;
border: 2px solid #0c1a3b;

/* Hover */
transform: translate(-2px, -2px);
box-shadow: 6px 6px 0px 0px #0c1a3b;

/* Active/Pressed */
transform: translate(4px, 4px);
box-shadow: 0px 0px 0px 0px #0c1a3b;
```

### Tipografia

| Fonte | Uso | Pesos | Via |
|-------|-----|-------|-----|
| `Anybody` | Headlines, display | 700, 800, 900 | `next/font/google` |
| `Space Grotesk` | Body, parágrafos | 400, 500, 700 | `next/font/google` |
| `JetBrains Mono` | Labels, códigos, badges | 600, 700 | `next/font/google` |
| Material Symbols | Ícones | Outlined | Google Fonts CSS |

### Espaçamento

| Token | Valor |
|-------|-------|
| `space-3xs` | 0.125rem |
| `space-2xs` | 0.25rem |
| `space-xs` | 0.5rem |
| `space-sm` | 0.75rem |
| `space-md` | 1rem |
| `space-lg` | 1.5rem |
| `space-xl` | 2rem |
| `space-2xl` | 3rem |
| `space-3xl` | 4rem |

### Formas

- Zero border-radius (tudo angular)
- Bordas 2px-4px solid `#0c1a3b`
- Clips 45° para badges e tags (clip-path)

---

## Convenções de Código

- **Server Components** por defeito
- **`"use client"`** apenas para interatividade (forms, toggles, relogios live, selecção)
- **Tailwind CSS** para todo o estilo — não usar CSS inline excepto sombras neo-brutal customizadas
- **Componentes** organizados por secção da aplicação (`/components/home/`, `/components/servicos/`, etc.)
- **Sanity queries** centralizadas em `/sanity/lib/queries.ts`
- **Dados estáticos** em `/src/data/*.json` (rotas, terminais, serviços)
- **Formulários** com React Hook Form + Zod para validação
- **Ícones** Material Symbols via `<span class="material-symbols-outlined">nome_icone</span>`

---

## Páginas (8 protótipo HTML como referência visual)

| # | Página | Rota | Tipo |
|---|--------|------|------|
| 1 | Página Principal | `/` | Home com hero booking, stats, serviços, notícias, CTA |
| 2 | Sobre Nós | `/sobre` | Timeline, segmentos, governança, certificações |
| 3 | Serviços | `/servicos` | Rede Express, Voltas, Shuttles, Aluguer, Cargas |
| 4 | Rastreamento | `/rastreamento` | Radar live, horários, dispatches |
| 5 | Notícias | `/noticias` | Listagem + artigo individual `[slug]` |
| 6 | Contato | `/contato` | Terminais, formulário, canais |
| 7 | Compra de Bilhetes | `/booking` | Seleção de rota, assentos, pagamento |
| 8 | Confirmação | `/booking/confirmacao` | Ticket digital, QR code |

**Protótipos HTML de referência:** `stitch_rosalina_express_redesign/stitch_rosalina_express_redesign/` (cada pasta contém `code.html`)

---

## Referências do Projecto

| Ficheiro | Conteúdo |
|----------|----------|
| `PLANO.md` | Plano completo do projecto (7 fases + documentação) |
| `DESIGN.md` | Sistema de design "Controlled Maximalist Express" |
| `AGENTS.md` | Este ficheiro — regras e conhecimento |
| `LOG.md` | Registo de progresso do projecto |
| `skills.json` | Skills de agentes disponíveis |
| `stitch_rosalina_express_redesign/` | Protótipos HTML e imagens |

---

## Ordem de Implementação

| # | Fase | Descrição |
|---|------|-----------|
| 1 | Setup Next.js + Sanity | Projecto base, design system, fonts, Sanity schemas |
| 2 | Layout (Header + Footer) | Shell compartilhado |
| 3 | Componentes UI | Button, Card, Badge, Input, Select, Table, Stepper |
| 4 | Sanity: Popular conteúdo | Criar notícias, rotas, serviços, terminais no Studio |
| 5 | Página Inicial | Home completa com dados do Sanity |
| 6 | Páginas informativas | Sobre, Serviços, Contato |
| 7 | Páginas dinâmicas | Rastreamento, Notícias (com Sanity) |
| 8 | Flow de Booking | Seleção, assentos, pagamento, confirmação |
| 9 | API Routes | Endpoints contacto, booking, rastreamento |
| 10 | SEO + Deploy | Optimização, Vercel, domínio |
