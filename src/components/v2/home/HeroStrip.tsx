import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function HeroStrip() {
  const { hero } = v2HomeContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 bg-tertiary border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-white mb-6">
                <span className="w-2 h-2 bg-green-400 animate-pulse rounded-full" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal stagger={2}>
              <h1 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
                {hero.titleTop}{" "}
                <span className="text-primary-container underline decoration-4 underline-offset-4">
                  {hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal stagger={3}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-6 max-w-xl">
                {hero.description}
              </p>
            </Reveal>

            <Reveal stagger={4}>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={hero.ctaPrimaryHref}
                  className="inline-flex items-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
                >
                  <MaterialIcon name="confirmation_number" className="text-lg" />
                  {hero.ctaPrimary}
                </Link>
                <Link
                  href={hero.ctaSecondaryHref}
                  className="inline-flex items-center gap-2 bg-surface text-on-surface font-label-code text-label-code uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
                >
                  <MaterialIcon name="gps_fixed" className="text-lg" />
                  {hero.ctaSecondary}
                </Link>
              </div>
            </Reveal>

            <Reveal stagger={5}>
              <div className="inline-flex items-center gap-2 bg-surface-container-low border-2 border-on-surface px-4 py-2 mt-6">
                <MaterialIcon
                  name="schedule"
                  className="text-primary-container text-sm"
                />
                <span className="font-label-code text-label-code uppercase text-on-surface">
                  {hero.statusBadge}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal stagger={3}>
              <div className="bg-tertiary border-4 border-on-surface p-6 shadow-[8px_8px_0px_0px_#0c1a3b]">
                <div className="bg-surface border-2 border-on-surface p-4">
                  <div className="flex items-center justify-between mb-4 border-b-2 border-outline-variant pb-3">
                    <span className="font-label-code text-label-code uppercase text-white">
                      LINHAS PRINCIPAIS
                    </span>
                    <span className="inline-flex items-center gap-1 bg-green-500 text-white font-label-code text-label-code uppercase px-2 py-0.5 text-xs">
                      <span className="w-1.5 h-1.5 bg-white animate-pulse rounded-full" />
                      LIVE
                    </span>
                  </div>

                  {[
                    { route: "LUANDA — BENGUELA", freq: "06:00 | 08:30 | 14:00" },
                    { route: "LUANDA — HUAMBO", freq: "06:30 | 12:00" },
                    { route: "LUANDA — LOBITO", freq: "07:00 | 13:30" },
                    { route: "LUANDA — CACUACO", freq: "A cada 30 min" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-outline-variant last:border-0"
                    >
                      <div>
                        <div className="font-label-code text-label-code uppercase text-white">
                          {r.route}
                        </div>
                        <div className="font-label-code text-label-code text-white/60 mt-0.5">
                          {r.freq}
                        </div>
                      </div>
                      <MaterialIcon
                        name="chevron_right"
                        className="text-primary-container text-lg"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { v: "20M", l: "Passageiros" },
                    { v: "50+", l: "Linhas" },
                    { v: "4", l: "Províncias" },
                    { v: "25+", l: "Parques" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="bg-surface border-2 border-on-surface p-3 text-center"
                    >
                      <div className="font-display-hero text-display-sm uppercase text-primary-container">
                        {s.v}
                      </div>
                      <div className="font-label-code text-label-code uppercase text-on-surface mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
