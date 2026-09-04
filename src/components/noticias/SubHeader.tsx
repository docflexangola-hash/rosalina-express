"use client";

import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function SubHeader() {
  const { subHeader } = noticiasContent;
  return (
    <section className="w-full bg-on-background border-b-4 border-on-surface overflow-hidden">
      <div className="w-full py-2 bg-on-background border-b-2 border-on-surface">
        <div className="ticker-track flex whitespace-nowrap text-on-surface font-label-code text-label-code uppercase">
          <span>
            {subHeader.ticker}
            <span className="text-primary-fixed">{'///'}</span>
          </span>
          <span aria-hidden="true">
            {subHeader.ticker}
            <span className="text-primary-fixed">{'///'}</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant mb-6">
          {subHeader.breadcrumb.map((c: string, i: number) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <MaterialIcon name="chevron_right" className="text-xs" />}
              {c}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-on-primary">
              <MaterialIcon name="warning" className="text-xs" />
              {subHeader.alertBadge}
            </span>
            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-white leading-none tracking-tight mt-4">
              {subHeader.title}
            </h1>
            <p className="font-headline-lg text-headline-lg text-primary-fixed mt-3 uppercase">
              {subHeader.paragraph}
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest text-on-surface p-5 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary-container mb-2">
                <MaterialIcon name="campaign" className="text-sm" />
                {subHeader.stamp}
              </div>
              <div className="font-label-code text-label-code uppercase text-on-surface-variant">
                <span className="text-primary-container">●</span> EMISSÃO EM TEMPO REAL
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-primary-container border-2 border-on-surface px-4 py-3 flex items-center gap-3 text-on-primary">
          <MaterialIcon name="warning" className="text-base" />
          <span className="font-label-code text-label-code uppercase">
            {subHeader.alertBadge}:
          </span>
          <span className="font-body-sm text-body-sm">
            {subHeader.alertText}
          </span>
        </div>
      </div>
    </section>
  );
}