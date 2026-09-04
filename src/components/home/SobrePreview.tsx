import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function SobrePreview() {
  const { sobre } = homeContent;
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Presentation Left */}
          <div className="lg:col-span-5 relative">
            <div className="bg-tertiary border-4 border-on-surface p-4 shadow-[8px_8px_0px_0px_#0c1a3b] relative">
              <div className="flex items-center justify-between border-b-2 border-secondary pb-3 mb-3 text-on-tertiary font-label-code text-label-code uppercase">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-primary-container" />
                  {sobre.imageFrameLabel}
                </span>
                <span>{sobre.imageFrameTag}</span>
              </div>
              <Image
                src={sobre.image}
                alt="Motoristas profissionais da Rosalina Express"
                width={640}
                height={360}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover border-2 border-on-surface mb-3"
              />
              <div className="bg-surface-container-lowest text-on-surface p-3 border-2 border-on-surface">
                <span className="font-headline-sm text-headline-sm uppercase block text-primary-container font-black">
                  {sobre.cardTitle}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {sobre.cardText}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-container text-on-primary border-2 border-on-surface font-label-code text-label-code uppercase px-4 py-2 shadow-[4px_4px_0px_0px_#0c1a3b] hidden sm:block">
              {sobre.ribbon}
            </div>
          </div>

          {/* Copy & Core Verticals Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="badge" className="text-sm" />
              <span>{sobre.badge}</span>
            </div>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-on-surface leading-none tracking-tight">

              {sobre.titleTop}{" "}
              <span className="text-primary-container">{sobre.titleAccent}</span>
            </h2>
            <div className="space-y-4 font-body-lg text-body-lg text-on-surface leading-relaxed">
              {sobre.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 1 ? "text-on-surface-variant font-body-md text-body-md" : ""}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {sobre.features.map((f, i) => (
                <Reveal key={f.title} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
                  <div
                    className="flex items-center gap-3 bg-surface-container-low border-2 border-on-surface p-3 shadow-[2px_2px_0px_0px_#0c1a3b] card-brutal"
                  >
                    <MaterialIcon
                      name={f.icon}
                      className="text-primary-container text-2xl"
                    />
                    <div>
                      <span className="font-headline-sm text-headline-sm uppercase text-on-surface block">
                        {f.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {f.text}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/sobre"
                className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
              >
                <span>{sobre.ctaLabel}</span>
                <MaterialIcon name="arrow_forward" />
              </Link>
              <div className="font-label-code text-label-code uppercase text-on-surface-variant flex items-center gap-2">
                <MaterialIcon name="format_image_left" className="text-primary-container" />
                <span>{sobre.regLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
