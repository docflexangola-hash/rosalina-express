import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function NoticiaDestaque() {
  const { destaque } = noticiasContent;
  return (
    <section className="w-full bg-surface-container-highest border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="bg-surface-container-low border-2 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] aspect-[16/9]">
              <div className="w-full h-full bg-tertiary flex items-center justify-center">
                <MaterialIcon
                  name="article"
                  className="text-primary-fixed text-7xl opacity-30"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary shadow-[2px_2px_0px_0px_#0c1a3b]">
                <MaterialIcon name="campaign" className="text-xs inline mr-1" />
                COMUNICADO URGENTE
              </div>
              <div className="absolute bottom-4 right-4 bg-tertiary text-white border-2 border-on-surface px-3 py-2 shadow-[4px_4px_0px_0px_#0c1a3b]">
                <div className="font-label-code text-label-code uppercase text-primary-fixed">
                  ROTA EN-260 // LINHA 404
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary-container opacity-0 group-hover:opacity-5 transition-opacity" />
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 bg-surface-container-lowest border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-surface-variant">
              {destaque.categoryBadge}
            </span>
            <div className="font-label-code text-label-code uppercase text-on-surface-variant">
              {destaque.date} • {destaque.ref}
            </div>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
              {destaque.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {destaque.excerpt}
            </p>
            <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant">
              <MaterialIcon name="schedule" className="text-sm" />
              Tempo de leitura: {destaque.readTime} • {destaque.author}
            </div>
            <Link
              href={`/noticias/${encodeURIComponent(destaque.ref.toLowerCase().replace(/[\/]/g, "-"))}`}
              className="inline-flex items-center gap-3 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <span>{destaque.cta}</span>
              <MaterialIcon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}