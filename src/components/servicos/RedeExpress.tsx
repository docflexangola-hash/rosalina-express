import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { servicosContent } from "@/content/servicos";

export function RedeExpress() {
  const { redes } = servicosContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="local_shipping" className="text-sm" />
              {redes.badge}
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {redes.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4">
              {redes.description}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-tertiary border-4 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] p-6 mb-10">
            <div className="bg-surface border-2 border-on-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-outline-variant pb-3 mb-4">
                <span className="font-label-code text-label-code uppercase text-tertiary">
                  RESUMO
                </span>
                <span className="inline-flex items-center gap-1 bg-primary-container text-white font-label-code text-label-code uppercase px-2 py-0.5">
                  <span className="w-1.5 h-1.5 bg-white animate-pulse rounded-full" />
                  {redes.impacto.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
                {[
                  {
                    stat: redes.impacto.stat,
                    label: redes.impacto.unit,
                    icon: "directions_car",
                  },
                  {
                    stat: "24/7",
                    label: "operacao continua",
                    icon: "schedule",
                  },
                  {
                    stat: "3",
                    label: "turnos operacionais",
                    icon: "groups",
                  },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <MaterialIcon name={s.icon} className="text-primary-container text-3xl mx-auto mb-1" />
                    <div className="font-display-hero text-3xl uppercase text-primary-container">
                      {s.stat}
                    </div>
                    <div className="font-label-code text-label-code uppercase text-on-surface">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {redes.impacto.title}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {redes.benefits.map((b, i) => (
            <Reveal
              key={b.title}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-5 h-full">
                <MaterialIcon name={b.icon} className="text-primary-container text-3xl" />
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-3">
                  {b.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal mb-8">
            <div className="bg-tertiary border-b-2 border-on-surface px-6 py-4">
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-tertiary">
                <MaterialIcon name="schedule" className="text-sm" />
                Horário de Funcionamento
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-label-code text-label-code uppercase text-primary-container mb-1">
                    Dias Úteis
                  </div>
                  <div className="font-body-md text-body-md text-on-surface">
                    {redes.horario.diasUteis}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {redes.horario.diasUteisNota}
                  </div>
                </div>
                <div>
                  <div className="font-label-code text-label-code uppercase text-secondary mb-1">
                    Fins de Semana
                  </div>
                  <div className="font-body-md text-body-md text-on-surface">
                    {redes.horario.fimSemana}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {redes.horario.fimSemanaNota}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t-2 border-outline-variant">
                <div className="inline-flex items-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-3 py-1.5 mb-2">
                  <MaterialIcon name="campaign" className="text-sm" />
                  {redes.novidade.badge}
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  {redes.novidade.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={redes.ctaPrimaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150"
            >
              <MaterialIcon name="phone" className="text-lg" />
              {redes.ctaPrimary}
            </a>
            <a
              href={redes.ctaSecondaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tertiary text-white font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150"
            >
              <MaterialIcon name="email" className="text-lg" />
              {redes.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
