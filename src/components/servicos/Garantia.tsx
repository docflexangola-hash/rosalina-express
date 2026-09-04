import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

export function Garantia() {
  const { garantia } = servicosContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] overflow-hidden">
          <div className="bg-on-background text-white px-6 py-4 border-b-2 border-on-surface flex items-center justify-between gap-4 flex-wrap">
            <span className="font-headline-md text-headline-md uppercase">
              {garantia.title}
            </span>
            <span className="font-label-code text-label-code uppercase text-primary-fixed">
              {garantia.label}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x-2 divide-on-surface">
            {garantia.items.map((g) => (
              <div
                key={g.titulo}
                className="bg-surface-container-lowest p-6"
              >
                <MaterialIcon name={g.icon} className="text-primary-container text-3xl" />
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-3">
                  {g.titulo}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  {g.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}