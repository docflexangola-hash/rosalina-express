import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";

export function Suporte() {
  const { suporte } = rastreamentoContent;
  return (
    <section className="w-full bg-tertiary border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-fixed mb-2">
              <MaterialIcon name={suporte.sublabelIcon} className="text-sm" />
              {suporte.sublabel}
            </div>
            <h3 className="font-headline-lg text-headline-lg uppercase text-white">
              {suporte.title}
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed leading-relaxed mt-3">
              {suporte.paragraph}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {suporte.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-tertiary-container text-on-tertiary border-2 border-on-surface p-4 shadow-[4px_4px_0px_0px_#0c1a3b] text-center"
                >
                  <div className="font-headline-md text-headline-md text-primary-fixed">
                    {m.value}
                  </div>
                  <div className="font-label-code text-label-code uppercase text-on-tertiary mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {suporte.ctas.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex-1 font-headline-sm text-headline-sm uppercase px-6 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2 ${
                    c.cor === "primary-container"
                      ? "bg-primary-container text-on-primary"
                      : c.cor === "surface-container-lowest"
                        ? "bg-surface-container-lowest text-on-surface"
                        : "bg-secondary text-on-secondary"
                  }`}
                >
                  <MaterialIcon name={c.icon} />
                  <span className="text-xs sm:text-sm">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}