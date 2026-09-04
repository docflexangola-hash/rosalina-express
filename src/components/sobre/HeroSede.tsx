import Image from "next/image";
import { MaterialIcon } from "@/components/MaterialIcon";
import { sobreContent } from "@/content/sobre";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSede() {
  const { heroSede } = sobreContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="bg-tertiary border-4 border-on-surface p-4 shadow-[8px_8px_0px_0px_#0c1a3b]">
              <div className="flex items-center justify-between border-b-2 border-secondary pb-3 mb-3 text-on-tertiary font-label-code text-label-code uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-container" />
                  {heroSede.imageHeader}
                </span>
                <span>{heroSede.imageLoc}</span>
              </div>
              <div className="relative">
                <Image
                  src={heroSede.image}
                  alt="Edifício sede corporativo e terminal integrado do Grupo Rosalina em Luanda"
                  width={960}
                  height={560}
                  className="w-full aspect-[16/9] object-cover border-2 border-on-surface"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary-container text-on-primary border-t-2 border-on-surface px-4 py-3">
                  <div className="font-label-code text-label-code uppercase mb-0.5 opacity-80">
                    {heroSede.overlayLabel}
                  </div>
                  <div className="font-headline-md text-headline-md uppercase font-black">
                    {heroSede.overlayTitle}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 font-label-code text-label-code uppercase text-on-tertiary">
                <span className="flex items-center gap-2 bg-tertiary-container border-2 border-on-surface px-3 py-1 text-on-tertiary">
                  <MaterialIcon name="location_on" className="text-sm" />
                  {heroSede.tapeLeft}
                </span>
                <span className="flex items-center gap-2 border-2 border-primary-fixed px-3 py-1 text-primary-fixed">
                  <MaterialIcon name="sync_alt" className="text-sm" />
                  {heroSede.tapeRight}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <Reveal stagger={3}>
              <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal">
                <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-on-primary">
                  <MaterialIcon name="assignment_late" className="text-xs" />
                  {heroSede.manifestBadge}
                </span>
                <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
                  {heroSede.manifestTitle}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                  {heroSede.manifestText}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {heroSede.stats.map((s, i) => (
                <Reveal key={s.label} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
                  <div
                    className="bg-tertiary text-on-tertiary border-2 border-on-surface p-4 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal"
                  >
                    <MaterialIcon name={s.icon} className="text-primary-fixed text-2xl" />
                    <div className="font-display-hero text-display-hero text-white mt-2 leading-none">
                      <AnimatedNumber value={parseInt(s.value.replace(/\D/g, ""), 10) || 0} />
                      {s.value.includes("+") ? "+" : ""}
                    </div>
                    <div className="font-label-code text-label-code uppercase text-primary-fixed mt-1">
                      {s.label}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-tertiary mt-1 opacity-80">
                      {s.text}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}