import Link from "next/link";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicosGrid() {
  const { servicos } = homeContent;
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-on-surface pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-3 py-0.5 text-label-tracking font-label-tracking uppercase border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] mb-3">
              <MaterialIcon name="local_shipping" className="text-xs" />
              <span>{servicos.badgeLabel}</span>
            </div>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface tracking-tight leading-none">
              {servicos.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
              {servicos.description}
            </p>
          </div>
          <Link
            href="/servicos"
            className="bg-tertiary text-on-tertiary font-headline-sm text-headline-sm uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] transition-all inline-flex items-center gap-2 self-start md:self-auto"
          >
            <span>{servicos.ctaLabel}</span>
            <MaterialIcon name="open_in_new" />
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.items.map((s, i) => (
            <Reveal key={s.title} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <div
                className={`${
                  s.featured
                    ? "bg-tertiary text-on-tertiary relative"
                    : "bg-surface-container-lowest"
                } border-2 border-on-surface p-6 shadow-[5px_5px_0px_0px_#0c1a3b] flex flex-col justify-between group hover:-translate-y-1 transition-transform`}
              >
              {s.featured && s.recommended && (
                <div className="absolute -top-3 right-4 bg-primary-container text-on-primary font-label-code text-label-code px-2 py-0.5 border border-on-surface uppercase">
                  {s.recommended}
                </div>
              )}
              <div>
                <div
                  className={`flex items-center justify-between border-b-2 ${
                    s.featured ? "border-secondary" : "border-on-surface"
                  } pb-3 mb-4`}
                >
                  <span
                    className={`font-label-code text-label-code px-2 py-0.5 border font-bold uppercase ${
                      s.featured
                        ? "bg-on-tertiary-fixed text-on-tertiary border-secondary"
                        : "bg-surface-container text-on-surface border-on-surface"
                    }`}
                  >
                    {s.tag}
                  </span>
                  <MaterialIcon
                    name={s.icon}
                    className={`text-2xl ${
                      s.featured ? "text-primary-fixed" : "text-primary-container"
                    }`}
                  />
                </div>
                <h3
                  className={`font-headline-md text-headline-md uppercase mb-2 ${
                    s.featured ? "text-on-tertiary" : "text-on-surface"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`font-body-md text-body-md leading-relaxed mb-6 ${
                    s.featured ? "text-surface-variant" : "text-on-surface-variant"
                  }`}
                >
                  {s.description}
                </p>
              </div>
              <div
                className={`pt-4 border-t-2 flex items-center justify-between ${
                  s.featured ? "border-secondary/40" : "border-surface-container-high"
                }`}
              >
                <span
                  className={`font-label-tracking text-label-tracking uppercase font-bold ${
                    s.featured ? "text-secondary-container" : "text-primary-container"
                  }`}
                >
                  {s.footerTag}
                </span>
                <Link
                  href="/servicos"
                  className={`inline-flex items-center gap-1 font-headline-sm text-xs uppercase group-hover:translate-x-1 transition-all ${
                    s.featured
                      ? "text-on-tertiary group-hover:text-secondary-container"
                      : "text-tertiary group-hover:text-primary-container"
                  }`}
                >
                  <span>Saiba mais</span>
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            </div>
            </Reveal>
          ))}

          {/* Dispatch callout card */}
          <Reveal stagger={6}>
            <div className="bg-primary-container text-on-primary border-2 border-on-surface p-6 shadow-[5px_5px_0px_0px_#0c1a3b] card-brutal flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between border-b-2 border-on-primary/40 pb-3 mb-4 font-label-code text-label-code uppercase">
                  <span>{servicos.dispatch.label}</span>
                  <MaterialIcon name="package_2" />
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-primary mb-2">
                  {servicos.dispatch.title}
                </h3>
                <p className="font-body-md text-body-md text-on-primary/90 leading-relaxed mb-6">
                  {servicos.dispatch.description}
                </p>
              </div>
              <Link
                href="/rastreamento"
                className="bg-surface-container-lowest text-on-surface border-2 border-on-surface py-2.5 px-4 font-headline-sm text-xs uppercase text-center shadow-[3px_3px_0px_0px_#0c1a3b] hover:bg-surface-container-low transition-all"
              >
                {servicos.dispatch.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
