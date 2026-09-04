import Image from "next/image";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function TerminaisRede() {
  const { terminais } = homeContent;
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-high border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-on-surface pb-4">
          <div>
            <span className="font-label-tracking text-label-tracking uppercase text-primary-container font-bold">
              {terminais.label}
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
              {terminais.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 font-label-code text-label-code uppercase">
            {terminais.badges.map((b) => (
              <span
                key={b}
                className="px-2 py-1 bg-surface-container-lowest border border-on-surface font-bold text-on-surface"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Terminal Dispatch Directory */}
          <div className="lg:col-span-4 space-y-3">
            {terminais.list.map((t, i) => (
              <Reveal key={t.city} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div
                  className="bg-surface-container-lowest border-2 border-on-surface p-4 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal"
                >
                  <div className="flex items-center justify-between text-label-code font-label-code uppercase mb-1">
                    <span
                      className={`font-bold ${
                        t.primary ? "text-primary-container" : "text-secondary"
                      }`}
                    >
                      {t.hub}
                    </span>
                    <span className="bg-tertiary text-on-tertiary px-1.5 py-0.5 text-[10px]">
                      {t.city}
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm uppercase text-on-surface font-black">
                    {t.name}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {t.address}
                  </div>
                  <div className="mt-2 text-xs font-label-code text-tertiary font-bold flex items-center gap-2">
                    <MaterialIcon name={t.icon} className="text-xs" />
                    {t.info}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Visual Tactical Map */}
          <Reveal className="lg:col-span-8" stagger={3}>
            <div className="bg-surface-container-lowest border-4 border-on-surface p-4 shadow-[6px_6px_0px_0px_#0c1a3b] flex flex-col justify-between h-full">
            <div className="flex items-center justify-between pb-3 border-b-2 border-on-surface text-label-code font-label-code uppercase">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-primary-container" />
                {terminais.mapTitle}
              </span>
              <span>{terminais.mapCoord}</span>
            </div>
            <div className="w-full h-80 sm:h-96 my-3 border-2 border-on-surface relative overflow-hidden">
              <Image
                src={terminais.mapImage}
                alt="Mapa de localização da Central Rodoviária Luanda"
                width={800}
                height={480}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-surface-container-lowest border-2 border-on-surface p-3 shadow-[4px_4px_0px_0px_#0c1a3b] max-w-xs">
                <span className="bg-primary-container text-on-primary font-label-code text-[10px] px-1.5 py-0.5 uppercase border border-on-surface inline-block mb-1">
                  {terminais.mapBadge}
                </span>
                <p className="font-headline-sm text-headline-sm uppercase text-on-surface font-black">
                  {terminais.mapCardTitle}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {terminais.mapCardText}
                </p>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-label-code font-label-code uppercase text-on-surface-variant">
              <span>{terminais.mapFooterText}</span>
              <a
                className="text-primary-container hover:underline font-bold flex items-center gap-1"
                href={terminais.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Abrir no Google Maps</span>
                <MaterialIcon name="open_in_new" className="text-sm" />
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
