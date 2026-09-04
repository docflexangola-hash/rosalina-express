import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function NoticiaChave() {
  const { noticia } = v2HomeContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="bg-surface-container-lowest border-4 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] card-brutal">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-tertiary border-b-4 md:border-b-0 md:border-r-4 border-on-surface p-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-2 py-0.5 mb-4">
                    <MaterialIcon name="campaign" className="text-sm" />
                    {noticia.badge}
                  </div>
                  <span className="block font-label-code text-label-code uppercase text-white/80 mb-6">
                    {noticia.date}
                  </span>
                </div>
                <div>
                  <div className="font-display-hero text-display-sm uppercase text-white leading-none">
                    {noticia.category}
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-white/70 font-label-code text-label-code">
                    <MaterialIcon name="visibility" className="text-sm" />
                    {noticia.views} visualizações
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-8">
                <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
                  {noticia.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                  {noticia.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={noticia.ctaHref}
                    className="inline-flex items-center gap-2 bg-primary-container text-white font-label-code text-label-code uppercase px-5 py-2.5 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
                  >
                    {noticia.cta}
                    <MaterialIcon name="arrow_forward" className="text-lg" />
                  </Link>
                  <Link
                    href="/noticias"
                    className="inline-flex items-center gap-1 font-label-code text-label-code uppercase text-on-surface hover:text-primary-container"
                  >
                    Ver todas
                    <MaterialIcon name="chevron_right" className="text-base" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
