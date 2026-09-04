import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";

export function AcaoPrincipal() {
  const { acaoPrincipal } = homeContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[16/9] bg-surface-container-low border-4 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] overflow-hidden">
              <Image
                src="/autocarros.jpg"
                alt="Autocarros Rosalina Express"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal stagger={1}>
              <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary w-fit">
                <MaterialIcon name="directions_bus" className="text-sm" />
                {acaoPrincipal.badge}
              </span>
            </Reveal>

            <Reveal stagger={2}>
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-on-surface leading-none tracking-tight">
                {acaoPrincipal.title}
              </h1>
            </Reveal>

            <Reveal stagger={3}>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {acaoPrincipal.paragraph}
              </p>
            </Reveal>

            <div className="flex flex-col gap-3 mt-2">
              {acaoPrincipal.buttons.map((btn, i) => (
                <Reveal
                  key={i}
                  stagger={(Math.min(i + 4, 6)) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <Link
                    href={btn.href}
                    className={`inline-flex items-center gap-3 px-6 py-3.5 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150 text-white font-label-code text-label-code uppercase ${
                      btn.bg === "primary-container"
                        ? "bg-primary-container"
                        : "bg-tertiary"
                    }`}
                  >
                    <MaterialIcon name={btn.icon as "route"} className="text-xl" />
                    {btn.label}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
