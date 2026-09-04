import { MaterialIcon } from "@/components/MaterialIcon";
import { sobreContent } from "@/content/sobre";

const corClasses: Record<string, string> = {
  primary: "text-primary-container",
  tertiary: "text-tertiary",
  secondary: "text-secondary",
};

export function Certificacoes() {
  const { certificacoes } = sobreContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="verified" className="text-sm" />
            {certificacoes.label}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4 max-w-4xl">
            {certificacoes.title}
          </h2>
          <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary mt-4">
            <MaterialIcon name="check_circle" className="text-sm" />
            {certificacoes.status}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificacoes.items.map((c, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6 flex flex-col items-center text-center"
            >
              <MaterialIcon name={c.icon} className={`${corClasses[c.cor]} text-4xl`} />
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-3">
                {c.title}
              </h3>
              <span className="font-label-code text-label-code uppercase text-on-surface-variant mt-1">
                {c.sub}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-3">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}