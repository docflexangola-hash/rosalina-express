import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2SobreContent } from "@/content/v2/sobre";

const bgClass: Record<string, string> = {
  primary: "bg-primary text-white",
  tertiary: "bg-tertiary text-white",
  secondary: "bg-secondary text-white",
  surface: "bg-surface text-on-surface",
};

export function QuatroSegmentos() {
  const { segmentos } = v2SobreContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="account_tree" className="text-sm" />
              {segmentos.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {segmentos.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {segmentos.items.map((s, i) => (
            <Reveal
              key={i}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal h-full">
                <div
                  className={`flex items-center gap-3 px-5 py-3 border-b-2 border-on-surface ${bgClass[s.bg] ?? "bg-primary text-white"}`}
                >
                  <span className="font-label-code text-label-code uppercase opacity-70">
                    {s.num}
                  </span>
                  <MaterialIcon
                    name={s.icon as "local_shipping"}
                    className="text-xl"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface"
                      >
                        <MaterialIcon
                          name="arrow_right"
                          className="text-primary-container text-base flex-shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
