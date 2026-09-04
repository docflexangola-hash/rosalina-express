import { MaterialIcon } from "@/components/MaterialIcon";
import { servicosContent } from "@/content/servicos";

export function SubHeader() {
  const { subHeader } = servicosContent;
  return (
    <section className="w-full bg-tertiary border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center gap-2 font-label-code text-label-code uppercase text-on-tertiary mb-6">
          {subHeader.breadcrumb.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <MaterialIcon name="chevron_right" className="text-xs" />}
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-on-primary mb-4">
              {subHeader.badge}
            </span>
            <h1 className="font-display-hero text-display-hero uppercase text-white leading-none tracking-tight">
              {subHeader.title}
            </h1>
            <p className="font-headline-lg text-headline-lg text-primary-fixed mt-3 uppercase">
              {subHeader.subtitle}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-2 font-label-code text-label-code uppercase text-primary-fixed">
            <div className="bg-surface-container-lowest text-on-surface p-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b]">
              <MaterialIcon name="badge" className="text-primary-container text-xl mb-1" />
              {subHeader.line1}
            </div>
            <div className="border-2 border-primary-fixed px-4 py-2 flex items-center gap-2">
              <MaterialIcon name="map" className="text-sm" />
              {subHeader.line2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}