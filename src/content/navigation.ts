export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Rastreamento", href: "/rastreamento" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contacto", href: "/contato" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Rastreamento", href: "/rastreamento" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contacto", href: "/contato" },
];

export const footerLegal: NavItem[] = [
  { label: "Termos de Transporte", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Suporte", href: "#" },
];
