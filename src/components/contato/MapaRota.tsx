import { MaterialIcon } from "@/components/MaterialIcon";
import { contatoContent } from "@/content/contato";

const rotas = ["LUANDA", "BENGUELA", "HUAMBO", "LOBITO"];

export function MapaRota() {
  const { mapa } = contatoContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="map" className="text-sm" />
              {mapa.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
              {mapa.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {mapa.text}
            </p>
            <div className="bg-surface-container-lowest border-2 border-on-surface p-5 shadow-[4px_4px_0px_0px_#0c1a3b] font-label-code text-label-code uppercase text-on-surface-variant">
              <div className="flex items-center gap-2 text-primary-container">
                <MaterialIcon name="hub" className="text-sm" />
                {mapa.linha}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6">
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-fixed mb-4">
                <MaterialIcon name="route" className="text-sm" />
                CORREDORES NORTE — SUL
              </div>
              <div className="flex flex-col items-center gap-6">
                {rotas.map((r, i) => (
                  <div key={r} className="flex items-center w-full gap-4">
                    <span className="w-4 h-4 bg-primary-fixed border-2 border-on-surface rounded-full flex-shrink-0" />
                    <span className="flex-1 h-2 border-y-2 border-on-surface relative">
                      {i < rotas.length - 1 && (
                        <MaterialIcon
                          name="arrow_downward"
                          className="absolute left-1/2 -translate-x-1/2 -top-3 text-primary-fixed text-sm bg-tertiary"
                        />
                      )}
                    </span>
                    <span className="w-24 text-right font-headline-sm text-headline-sm uppercase text-white">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t-2 border-secondary pt-4 font-label-code text-label-code uppercase text-primary-fixed text-center">
                EN100 • EN120 • EN230
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}