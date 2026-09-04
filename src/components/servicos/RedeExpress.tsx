import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

const rotaCor: Record<string, string> = {
  primary: "bg-primary-container text-on-primary",
  tertiary: "bg-tertiary text-on-tertiary",
  secondary: "bg-secondary text-on-secondary",
};

export function RedeExpress() {
  const { redes } = servicosContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="local_shipping" className="text-sm" />
            {redes.badge}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
            {redes.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4">
            {redes.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {redes.features.map((f) => (
            <div
              key={f.title}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-5"
            >
              <MaterialIcon name={f.icon} className="text-primary-container text-3xl" />
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-3">
                {f.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal">
          <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4 flex items-center gap-2 font-label-code text-label-code uppercase">
            <MaterialIcon name="route" className="text-sm" />
            ROTAS PRINCIPAIS EM OPERAÇÃO
          </div>
          <ul>
            {redes.rotas.map((r, i) => (
              <li
                key={i}
                className="flex items-center justify-between px-6 py-4 border-b-2 border-outline-variant last:border-b-0"
              >
                <span className="font-headline-md text-headline-md uppercase text-on-surface">
                  {r.cidade} <span className="text-primary-container">↔</span> {r.destino}
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-label-code text-label-code uppercase text-on-surface-variant">
                    {r.duracao}
                  </span>
                  <span className={`${rotaCor[r.cor]} border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase`}>
                    {r.freq}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/booking"
            className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
          >
            <span>{redes.cta}</span>
            <MaterialIcon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}