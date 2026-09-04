import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

export function Shuttles() {
  const { shuttles } = servicosContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="work" className="text-sm" />
            {shuttles.badge}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
            {shuttles.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4">
            {shuttles.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shuttles.itens.map((s) => (
            <div
              key={s.titulo}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-tertiary border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal">
                <MaterialIcon name={s.icon} className="text-primary-fixed text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-4">
                {s.titulo}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                {s.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/contato"
            className="bg-secondary text-on-secondary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
          >
            <span>{shuttles.cta}</span>
            <MaterialIcon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}