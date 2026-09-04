import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { footerQuickLinks, footerLegal } from "@/content/navigation";
import { MaterialIcon } from "@/components/MaterialIcon";

const servicosFooter = [
  { icon: "local_shipping", label: "Rede Express Cargas" },
  { icon: "directions_bus", label: "Voltas e Conexões" },
  { icon: "commute", label: "Transporte Urbano" },
  { icon: "alt_route", label: "Transporte Interurbano" },
  { icon: "airport_shuttle", label: "Shuttle Empresarial" },
  { icon: "car_rental", label: "Aluguer de Viaturas" },
];

const badges = [
  { label: "20+ Anos", tone: "tertiary" },
  { label: "4 Segmentos", tone: "tertiary" },
  { label: "100% Angolano", tone: "primary" },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-on-background text-surface-container-lowest border-t-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b-2 border-surface-variant/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-surface-container-lowest p-2 border-2 border-on-surface max-w-fit">
              <Image
                src="/logo.webp"
                alt="Logo da Rosalina Express"
                width={108}
                height={32}
                className="h-8 w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <h4 className="font-headline-sm text-headline-sm uppercase text-surface-container-lowest tracking-tight">
              {site.fullName}
            </h4>
            <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
              {site.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`px-2 py-1 font-label-tracking text-label-tracking uppercase border ${
                    b.tone === "primary"
                      ? "bg-primary-container text-on-primary border-primary"
                      : "bg-tertiary-container text-on-tertiary border-secondary"
                  }`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm uppercase text-secondary-container border-l-4 border-primary-container pl-2">
              Links Rápidos
            </h4>
            <ul className="space-y-2 font-label-code text-label-code uppercase tracking-wider">
              {footerQuickLinks.map((item, i) => (
                <li
                  key={item.href}
                  className={`pb-1 ${i < footerQuickLinks.length - 1 ? "border-b border-surface-variant/10" : ""}`}
                >
                  <Link
                    href={item.href}
                    className="text-surface-variant hover:text-on-primary-container hover:translate-x-1 inline-flex items-center gap-1 transition-transform"
                  >
                    <MaterialIcon name="chevron_right" className="text-xs" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm uppercase text-secondary-container border-l-4 border-primary-container pl-2">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 font-body-sm text-body-sm">
              {servicosFooter.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2 text-surface-variant"
                >
                  <MaterialIcon
                    name={s.icon}
                    className="text-xs text-primary-container"
                  />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm uppercase text-secondary-container border-l-4 border-primary-container pl-2">
              Contactos Centrais
            </h4>
            <div className="font-body-sm text-body-sm text-surface-variant space-y-2">
              <p className="flex items-start gap-2">
                <MaterialIcon
                  name="location_on"
                  className="text-sm mt-0.5 text-primary-container"
                />
                <span>{site.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <MaterialIcon
                  name="phone_in_talk"
                  className="text-sm text-primary-container"
                />
                <span>{site.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MaterialIcon
                  name="mail"
                  className="text-sm text-primary-container"
                />
                <span>{site.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MaterialIcon
                  name="schedule"
                  className="text-sm text-primary-container"
                />
                <span>{site.hoursFull}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-label-code text-label-code uppercase tracking-wider text-surface-variant">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-tertiary text-on-tertiary border border-secondary text-[10px]">
              STATUS: ATIVO
            </span>
            <span>© 2026 {site.fullName}. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-6">
            {footerLegal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-on-primary-container transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
