import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { sobreContent } from "@/content/sobre";

export function CtaInstitucional() {
  const { cta } = sobreContent;
  return (
    <section className="w-full bg-tertiary border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-on-background border-4 border-on-surface p-8 md:p-12 shadow-[8px_8px_0px_0px_#0c1a3b]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-on-primary">
                {cta.badge}
              </span>
              <div className="font-label-code text-label-code uppercase text-primary-fixed mt-4">
                {cta.sideLabel}
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display-hero text-display-hero uppercase text-white leading-none tracking-tight">
                {cta.title}
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-on-surface leading-relaxed mt-4 max-w-3xl">
                {cta.text}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link
                  href="/contato"
                  className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
                >
                  <span>{cta.btn1}</span>
                  <MaterialIcon name="arrow_forward" />
                </Link>
                <Link
                  href="/servicos"
                  className="bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
                >
                  <span>{cta.btn2}</span>
                  <MaterialIcon name="format_list_bulleted" />
                </Link>
              </div>
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-fixed mt-6">
                <MaterialIcon name="call" className="text-sm" />
                {cta.line}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}