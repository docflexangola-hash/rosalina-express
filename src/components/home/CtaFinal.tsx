import Link from "next/link";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  const { cta } = homeContent;
  return (
    <section className="w-full bg-primary-container text-on-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Reveal>
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-on-surface text-on-primary px-4 py-1 font-label-code text-label-code uppercase border-2 border-surface-container-lowest shadow-[3px_3px_0px_0px_#ffffff]">
          <MaterialIcon name="airplane_ticket" className="text-sm text-primary-fixed" />
          {cta.badge}
        </div>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase tracking-tighter text-on-primary leading-none">
          {cta.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary/95 max-w-2xl mx-auto leading-relaxed">
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/rastreamento"
            className="w-full sm:w-auto bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm uppercase px-4 sm:px-8 py-3 sm:py-4 border-2 border-on-surface shadow-[5px_5px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 font-black"
          >
            <MaterialIcon name="confirmation_number" />
            <span>{cta.primaryCta}</span>
          </Link>
          <a
            href={`tel:${cta.phone}`}
            className="w-full sm:w-auto bg-on-surface text-surface-container-lowest font-headline-sm text-headline-sm uppercase px-4 sm:px-8 py-3 sm:py-4 border-2 border-surface-container-lowest shadow-[5px_5px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 font-black"
          >
            <MaterialIcon name="phone_in_talk" />
            <span>{cta.secondaryCta}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 font-label-tracking text-label-tracking uppercase tracking-widest text-on-primary/80">
          {cta.perks.map((perk) => (
            <span key={perk} className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-on-primary" />
              {perk}
            </span>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
