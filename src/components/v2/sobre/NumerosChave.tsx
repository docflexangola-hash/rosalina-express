import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2SobreContent } from "@/content/v2/sobre";

export function NumerosChave() {
  const { stats } = v2SobreContent;
  return (
    <section className="w-full bg-primary-container border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Reveal>
          <div className="flex items-center justify-between border-b-2 border-on-surface/40 pb-3 mb-6">
            <span className="inline-flex items-center gap-2 font-label-tracking text-label-tracking uppercase text-white">
              <MaterialIcon name="analytics" className="text-base" />
              {stats.badge}
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 bg-white text-on-surface border-2 border-on-surface font-label-code text-label-code uppercase px-2 py-0.5">
              2026
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.items.map((s, i) => {
            const numericValue = parseInt(s.value, 10) || 0;
            const displayValue = isNaN(numericValue) ? 0 : numericValue;
            return (
              <Reveal
                key={i}
                stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="bg-surface border-2 border-on-surface p-4 shadow-[3px_3px_0px_0px_#0c1a3b]">
                  <div className="flex items-baseline gap-1">
                    <AnimatedNumber
                      target={displayValue}
                      duration={1000}
                      className="font-display-hero text-display-lg uppercase text-primary-container leading-none"
                    />
                    {s.value.includes("+") && (
                      <span className="font-display-hero text-display-lg uppercase text-primary-container leading-none">
                        +
                      </span>
                    )}
                  </div>
                  <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                    {s.label}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
