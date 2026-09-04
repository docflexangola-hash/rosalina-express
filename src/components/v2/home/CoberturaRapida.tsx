import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function CoberturaRapida() {
  const { cobertura } = v2HomeContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="map" className="text-sm" />
              {cobertura.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {cobertura.title}
            </h2>
          </div>
        </Reveal>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-tertiary">
                <th className="border-2 border-on-surface px-4 py-3 text-left font-label-code text-label-code uppercase text-white">
                  Província
                </th>
                <th className="border-2 border-on-surface px-4 py-3 text-left font-label-code text-label-code uppercase text-white">
                  Terminais
                </th>
                <th className="border-2 border-on-surface px-4 py-3 text-left font-label-code text-label-code uppercase text-white">
                  Destinos
                </th>
                <th className="border-2 border-on-surface px-4 py-3 text-left font-label-code text-label-code uppercase text-white">
                  Frequência
                </th>
              </tr>
            </thead>
            <tbody>
              {cobertura.provinces.map((p, i) => (
                <Reveal
                  key={i}
                  stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <tr className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                    <td className="border-2 border-on-surface px-4 py-3">
                      <div className="flex items-center gap-2">
                        {p.capital && (
                          <span className="bg-primary text-white font-label-code text-label-code uppercase px-1.5 py-0.5 text-xs">
                            CAPITAL
                          </span>
                        )}
                        <span className="font-headline-md text-headline-md uppercase text-on-surface">
                          {p.province}
                        </span>
                      </div>
                    </td>
                    <td className="border-2 border-on-surface px-4 py-3">
                      <div className="space-y-1">
                        {p.terminals.map((t, ti) => (
                          <div key={ti} className="font-body-sm text-body-sm text-on-surface">
                            <div className="font-label-code text-label-code uppercase text-on-surface">
                              {t.name}
                            </div>
                            <div className="text-on-surface-variant text-xs">
                              {t.address}
                            </div>
                            {t.phone && (
                              <div className="text-primary-container font-label-code text-label-code">
                                {t.phone}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="border-2 border-on-surface px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {p.destinations.map((d, di) => (
                          <span
                            key={di}
                            className="bg-surface-container border border-on-surface font-label-code text-label-code uppercase px-2 py-0.5 text-xs text-on-surface"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="border-2 border-on-surface px-4 py-3">
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        {p.frequency}
                      </span>
                    </td>
                  </tr>
                </Reveal>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
