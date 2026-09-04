import { MaterialIcon } from "@/components/MaterialIcon";
import { sobreContent } from "@/content/sobre";

export function Segmentos() {
  const { segmentos } = sobreContent;

  const headerBgClass: Record<string, string> = {
    primary: "bg-primary-container text-on-primary",
    tertiary: "bg-tertiary text-on-tertiary",
    secondary: "bg-secondary text-on-secondary",
    inverse: "bg-inverse-surface text-inverse-on-surface",
  };

  const catCorClass: Record<string, string> = {
    primary: "text-primary-container",
    tertiary: "text-tertiary",
    secondary: "text-secondary",
    surface: "text-on-surface",
  };

  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="account_tree" className="text-sm" />
            {segmentos.badge}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
            {segmentos.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4">
            {segmentos.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segmentos.items.map((s) => (
            <div
              key={s.num}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal flex flex-col"
            >
              <div className={`${headerBgClass[s.headerBg]} border-b-2 border-on-surface px-6 py-4 flex items-center justify-between`}>
                <span className="font-label-code text-label-code uppercase">
                  {s.num}
                </span>
                <MaterialIcon name={s.icon} className="text-2xl" />
              </div>
              <div className="p-6 flex-1">
                <span className={`font-label-tracking text-label-tracking uppercase ${catCorClass[s.catCor]}`}>
                  {s.cat}
                </span>
                <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-2">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3">
                  {s.text}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface"
                    >
                      <MaterialIcon name="check_circle" className="text-primary-container text-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-container-low border-t-2 border-on-surface px-6 py-3 flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant">
                <MaterialIcon name={s.footerIcon} className="text-sm text-primary-container" />
                {s.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}