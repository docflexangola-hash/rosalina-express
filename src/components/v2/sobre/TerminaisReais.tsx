import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2SobreContent } from "@/content/v2/sobre";

export function TerminaisReais() {
  const { terminais } = v2SobreContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="location_city" className="text-sm" />
              {terminais.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {terminais.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {terminais.items.map((t, i) => (
            <Reveal
              key={i}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div
                className={`bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal h-full ${t.primary ? "border-l-8 border-l-primary-container" : ""}`}
              >
                <div className="flex items-center justify-between border-b-2 border-outline-variant p-4">
                  <div className="flex items-center gap-3">
                    <MaterialIcon
                      name="apartment"
                      className="text-2xl text-primary-container"
                    />
                    <div>
                      <div className="font-label-code text-label-code uppercase text-on-surface-variant text-xs">
                        {t.city}
                      </div>
                      <div className="font-headline-md text-headline-md uppercase text-on-surface">
                        {t.name}
                      </div>
                    </div>
                  </div>
                  {t.primary && (
                    <span className="bg-primary-container text-white font-label-code text-label-code uppercase px-2 py-0.5 text-xs">
                      PRINCIPAL
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <MaterialIcon
                      name="location_on"
                      className="text-primary-container text-base flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {t.address}
                    </span>
                  </div>
                  <a
                    href={`tel:${t.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-primary-container transition-colors"
                  >
                    <MaterialIcon
                      name="phone"
                      className="text-primary-container text-base"
                    />
                    <span className="font-label-code text-label-code text-on-surface">
                      {t.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${t.email}`}
                    className="flex items-center gap-2 hover:text-primary-container transition-colors"
                  >
                    <MaterialIcon
                      name="email"
                      className="text-primary-container text-base"
                    />
                    <span className="font-label-code text-label-code text-on-surface break-all">
                      {t.email}
                    </span>
                  </a>
                  <div className="flex items-center gap-2">
                    <MaterialIcon
                      name="schedule"
                      className="text-primary-container text-base"
                    />
                    <span className="font-label-code text-label-code text-on-surface">
                      {t.horario}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
