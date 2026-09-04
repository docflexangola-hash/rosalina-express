import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2SobreContent } from "@/content/v2/sobre";

export function LinhaDoTempo() {
  const { timeline } = v2SobreContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="timeline" className="text-sm" />
              {timeline.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {timeline.title}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-on-surface md:-translate-x-px" />

          {timeline.marcos.map((m, i) => (
            <Reveal
              key={i}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div
                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-primary-container text-white font-display-hero text-headline-md border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className={`flex-1 md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-label-code text-label-code uppercase text-primary-container">
                        {m.ano}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                      {m.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3">
                      {m.text}
                    </p>
                    <div className="mt-4 pt-3 border-t-2 border-outline-variant">
                      <span
                        className={`inline-flex items-center gap-2 font-label-code text-label-code uppercase ${
                          m.despachoCor === "primary"
                            ? "text-primary-container"
                            : m.despachoCor === "tertiary"
                              ? "text-tertiary"
                              : "text-secondary"
                        }`}
                      >
                        <MaterialIcon
                          name={m.final ? "flag" : "engineering"}
                          className="text-sm"
                        />
                        {m.despacho}
                      </span>
                    </div>
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
