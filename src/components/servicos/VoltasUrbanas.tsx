import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

export function VoltasUrbanas() {
  const { voltas } = servicosContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="directions_bus" className="text-sm" />
              {voltas.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {voltas.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-4">
              {voltas.description}
            </p>
            <ul className="mt-6 space-y-3">
              {voltas.notas.map((n, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 font-body-md text-body-md text-on-surface"
                >
                  <MaterialIcon name="check_circle" className="text-primary-container text-base" />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
              <div className="flex items-center justify-between px-6 py-4 border-b-2 border-on-surface text-on-tertiary font-label-code text-label-code uppercase">
                <span>CORREDORES URBANOS</span>
                <span className="bg-primary-container border-2 border-on-surface px-3 py-1 text-on-primary">
                  LUANDA
                </span>
              </div>
              <div className="p-6 space-y-4">
                {voltas.corridors.map((c, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-lowest border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b]"
                  >
                    <div className="flex items-center justify-between px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className="font-headline-md text-headline-md uppercase text-on-surface">
                          {c.rota}
                        </span>
                        <MaterialIcon name="swap_horiz" className="text-secondary" />
                        <span className="font-headline-md text-headline-md uppercase text-primary-container">
                          {c.vs}
                        </span>
                      </div>
                      <span className={`border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase ${
                        c.status === "24H" ? "bg-secondary text-on-secondary" : "bg-primary-container text-on-primary"
                      }`}>
                        {c.status}
                      </span>
                    </div>
                    <div className="px-5 pb-3 font-label-code text-label-code uppercase text-on-surface-variant">
                      {c.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}