import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2SobreContent } from "@/content/v2/sobre";

export function HeroCurto() {
  const { hero } = v2SobreContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary mb-4">
                <MaterialIcon name="info" className="text-sm" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal stagger={2}>
              <h1 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal stagger={3}>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-5 max-w-xl">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal stagger={4}>
              <div className="mt-8">
                <div className="flex items-baseline gap-1">
                  <AnimatedNumber
                    target={parseInt(hero.stat, 10) || 0}
                    duration={1200}
                    className="font-display-hero text-display-hero uppercase text-primary-container leading-none"
                  />
                </div>
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  {hero.statLabel}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal stagger={2}>
              <div className="bg-tertiary border-4 border-on-surface p-6 shadow-[8px_8px_0px_0px_#0c1a3b]">
                <div className="bg-surface border-2 border-on-surface p-5">
                  <div className="font-label-code text-label-code uppercase text-tertiary mb-4">
                    SEDE CORPORATIVA
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "location_on",
                        label: "Localização",
                        value: "Av. Ho Chi Minh, Luanda",
                      },
                      {
                        icon: "calendar_today",
                        label: "Fundação",
                        value: "2004",
                      },
                      {
                        icon: "business",
                        label: "Tipo",
                        value: "Grupo Empresarial 100% Angolano",
                      },
                      {
                        icon: "schedule",
                        label: "Horário",
                        value: "Seg-Dom 06:00 — 20:00",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2 border-b border-outline-variant last:border-0"
                      >
                        <MaterialIcon
                          name={item.icon as "location_on"}
                          className="text-primary-container text-lg flex-shrink-0"
                        />
                        <div>
                          <div className="font-label-code text-label-code uppercase text-on-surface-variant text-xs">
                            {item.label}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
