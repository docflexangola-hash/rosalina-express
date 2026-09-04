import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { servicosContent } from "@/content/servicos";

const corBadge: Record<string, string> = {
  blue: "bg-secondary text-on-secondary",
  green: "bg-tertiary text-on-tertiary",
  orange: "bg-primary-container text-on-primary",
  purple: "bg-tertiary-container text-on-tertiary",
  red: "bg-primary text-on-primary",
};

const corDot: Record<string, string> = {
  blue: "bg-secondary",
  green: "bg-tertiary",
  orange: "bg-primary-container",
  purple: "bg-tertiary-container",
  red: "bg-primary",
};

export function VoltasUrbanas() {
  const { voltas } = servicosContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="directions_bus" className="text-sm" />
              {voltas.badge}
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {voltas.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-4">
              {voltas.tagline}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 border-y-4 border-on-surface">
            {[
              { v: voltas.stats.viaturas, l: "Total de Viaturas" },
              { v: voltas.stats.rotas, l: "Rotas Operacionais" },
              { v: voltas.stats.cidades, l: "Cidades Servidas" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-tertiary text-on-tertiary p-6 text-center border-r-2 border-on-surface last:border-r-0"
              >
                <div className="font-display-hero text-4xl sm:text-5xl lg:text-display-hero uppercase text-white leading-none">
                  {s.v}
                </div>
                <div className="font-label-code text-label-code uppercase text-on-tertiary mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {voltas.cidades.map((c, i) => (
            <Reveal
              key={c.nome}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal h-full flex flex-col">
                <div
                  className={`flex items-center justify-between border-b-2 border-on-surface px-4 py-3 ${corBadge[c.cor] ?? "bg-primary-container text-on-primary"}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 ${corDot[c.cor] ?? "bg-white"}`} />
                    <span className="font-headline-md text-headline-md uppercase">
                      {c.nome}
                    </span>
                  </div>
                  <span className="bg-on-surface text-on-primary font-label-code text-label-code uppercase px-2 py-0.5">
                    {c.viaturas} viaturas
                  </span>
                </div>
                <div className="p-4 flex-1 space-y-3">
                  <div>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant mb-1.5">
                      Rotas ({c.rotas.length})
                    </div>
                    <ul className="space-y-1">
                      {c.rotas.map((r, ri) => (
                        <li
                          key={ri}
                          className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5"
                        >
                          <MaterialIcon
                            name="arrow_right"
                            className="text-primary-container text-sm flex-shrink-0"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant mb-1.5">
                      Marcas
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {c.marcas.map((m, mi) => (
                        <span
                          key={mi}
                          className="bg-surface-container border border-on-surface font-label-code text-label-code uppercase px-1.5 py-0.5 text-xs text-on-surface"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {voltas.benefits.map((b, i) => (
            <Reveal
              key={b.title}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="bg-surface-container-lowest border-2 border-on-surface p-5 shadow-[3px_3px_0px_0px_#0c1a3b] card-brutal h-full">
                <MaterialIcon
                  name={b.icon as "schedule"}
                  className="text-primary-container text-3xl mb-2"
                />
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  {b.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={voltas.ctaPrimaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150"
            >
              <MaterialIcon name="phone" className="text-lg" />
              {voltas.ctaPrimary}
            </Link>
            <Link
              href={voltas.ctaSecondaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tertiary text-white font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150"
            >
              <MaterialIcon name="category" className="text-lg" />
              {voltas.ctaSecondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
