import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function StatsRibbonV2() {
  const { stats } = v2HomeContent;
  return (
    <section className="w-full bg-primary-container border-y-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <div className="flex items-center justify-between border-b-2 border-on-surface/40 pb-3 mb-8">
            <span className="inline-flex items-center gap-2 font-label-tracking text-label-tracking uppercase text-white">
              <MaterialIcon name="analytics" className="text-base" />
              {stats.badge}
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 bg-white text-on-surface border-2 border-on-surface font-label-code text-label-code uppercase px-2 py-0.5">
              <MaterialIcon name="verified" className="text-base" />
              2026
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.items.map((s, i) => (
            <Reveal
              key={i}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="border-l-4 border-white pl-4">
                <div className="flex items-baseline gap-1">
                  <AnimatedNumber
                    target={parseInt(s.value, 10) || 0}
                    duration={1200}
                    className="font-display-hero text-display-hero uppercase text-white leading-none"
                  />
                  <span className="font-display-hero text-display-hero uppercase text-white">
                    {s.suffix}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-white mt-2">
                  {s.title}
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed mt-1">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
