import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";

export function NoticiasGrid() {
  const { noticias } = homeContent;
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-on-surface pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-3 py-0.5 text-label-tracking font-label-tracking uppercase border border-on-surface mb-2">
              <MaterialIcon name="newspaper" className="text-xs" />
              <span>{noticias.badge}</span>
            </div>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface tracking-tight leading-none">
              {noticias.titleTop}{" "}
              <span className="text-primary-container">{noticias.titleAccent}</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {noticias.description}
            </p>
          </div>
          <Link
            href="/noticias"
            className="bg-surface-container-lowest text-on-surface border-2 border-on-surface py-2.5 px-5 font-headline-sm text-xs uppercase shadow-[3px_3px_0px_0px_#0c1a3b] hover:bg-surface-container-high transition-all self-start sm:self-auto"
          >
            {noticias.ctaLabel}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticias.items.map((n) => (
            <article
              key={n.href}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="border-b-2 border-on-surface overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    width={480}
                    height={288}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-label-code font-label-code uppercase text-on-surface-variant text-xs">
                    <span
                      className={`font-bold ${
                        n.categoryTone === "secondary"
                          ? "text-secondary"
                          : "text-primary-container"
                      }`}
                    >
                      {n.category}
                    </span>
                    <span>{n.date}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary-container transition-colors leading-snug">
                    {n.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {n.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t-2 border-surface-container-high text-label-code font-label-code uppercase">
                <span className="text-xs text-on-surface-variant flex items-center gap-1">
                  <MaterialIcon name="visibility" className="text-xs" />
                  {n.views} Vistos
                </span>
                <Link
                  href={n.href}
                  className="text-primary-container font-bold flex items-center gap-1 hover:underline"
                >
                  <span>Ler Comunicado</span>
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
