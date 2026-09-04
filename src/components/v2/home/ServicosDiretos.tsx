import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function ServicosDiretos() {
  const { servicos } = v2HomeContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="category" className="text-sm" />
              {servicos.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {servicos.title}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {servicos.items.map((s, i) => (
            <Reveal
              key={i}
              stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-primary-container text-white font-label-code text-label-code uppercase px-2 py-0.5">
                        {s.tag}
                      </span>
                      <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                        {s.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                      {s.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <span className="inline-flex items-center gap-1.5 font-label-code text-label-code text-on-surface">
                        <MaterialIcon
                          name="schedule"
                          className="text-primary-container text-base"
                        />
                        {s.frequency}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-label-code text-label-code text-on-surface">
                        <MaterialIcon
                          name="airline_seat_recline_extra"
                          className="text-primary-container text-base"
                        />
                        {s.seats}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-label-code text-label-code text-primary-container font-bold">
                        <MaterialIcon
                          name="sell"
                          className="text-primary-container text-base"
                        />
                        {s.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={s.ctaHref}
                      className="inline-flex items-center gap-2 bg-tertiary text-white font-label-code text-label-code uppercase px-5 py-2.5 border-2 border-on-surface shadow-[3px_3px_0px_0px_#0c1a3b] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#0c1a3b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                    >
                      {s.cta}
                      <MaterialIcon name="arrow_forward" className="text-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
