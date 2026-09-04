import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function GridNoticias() {
  const { grid } = noticiasContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
            {grid.heading}
          </h2>
          <span className="font-label-code text-label-code uppercase text-primary-fixed">
            {grid.syncLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.cards.map((c: { categoryBadge: string; date: string; title: string; excerpt: string; hasImage: boolean }) => (
            <article
              key={c.date}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal overflow-hidden group"
            >
              {c.hasImage ? (
                <div className="aspect-[16/9] bg-tertiary flex items-center justify-center">
                  <MaterialIcon name="article" className="text-primary-fixed text-5xl opacity-30" />
                  <div className="absolute top-4 left-4 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary shadow-[2px_2px_0px_0px_#0c1a3b]">
                    <MaterialIcon name="campaign" className="text-xs inline mr-1" />
                    {c.categoryBadge}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-surface-container-low border-2 border-on-surface">
                  <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary mb-3">
                    <MaterialIcon name="badge" className="text-sm" />
                    {c.categoryBadge}
                  </span>
                  <div className="font-label-code text-label-code uppercase text-primary-fixed text-sm mb-1">
                    {c.date}
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-3">
                  {c.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {c.excerpt}
                </p>
                <Link
                  href={`/noticias/${encodeURIComponent(c.date.replace(/\s/g, "-"))}`}
                  className="inline-flex items-center gap-2 text-primary-container font-label-code text-label-code uppercase text-sm hover:underline"
                >
                  <MaterialIcon name="arrow_forward" className="text-xs" />
                  Ler Comunicado
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            className="bg-tertiary text-on-tertiary border-2 border-on-surface px-4 py-2 font-label-code text-label-code uppercase shadow-[2px_2px_0px_0px_#0c1a3b] hover:bg-primary hover:text-on-primary transition-colors"
          >
            {grid.pagination.previous}
          </button>
          <div>
            {grid.pagination.pages.map((p: string) => (
              <button
                key={p}
                type="button"
                className={`px-3 py-1 font-label-code text-label-code uppercase ${
                  grid.pagination.page1Active && p === "1"
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-lowest text-on-surface"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="bg-primary-container text-on-primary border-2 border-on-surface px-4 py-2 font-label-code text-label-code uppercase shadow-[2px_2px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            {grid.pagination.next}
          </button>
        </div>
      </div>
    </section>
  );
}