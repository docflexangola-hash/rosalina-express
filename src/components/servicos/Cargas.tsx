import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

export function Cargas() {
  const { cargas } = servicosContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="package_2" className="text-sm" />
              {cargas.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
              {cargas.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {cargas.description}
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all mt-2"
            >
              <span>{cargas.cta}</span>
              <MaterialIcon name="arrow_forward" />
            </Link>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cargas.servicos.map((s) => (
              <div
                key={s.titulo}
                className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-5"
              >
                <MaterialIcon name={s.icon} className="text-primary-container text-3xl" />
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-3">
                  {s.titulo}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  {s.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}