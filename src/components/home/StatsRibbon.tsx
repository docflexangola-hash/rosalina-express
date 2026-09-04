import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export function StatsRibbon() {
  const { statsRibbon } = homeContent;

  const itemsData = statsRibbon.items.map((item) => {
    const raw = item.value;
    const dotIdx = raw.indexOf(".");
    const hasDecimal = dotIdx >= 0 && /^\d+\.\d+$/.test(raw);
    if (hasDecimal) {
      const [intPart, decPart] = raw.split(".");
      const numeric = parseInt(intPart, 10) || 0;
      const decimals = decPart.length;
      return { numeric, suffix: "", prefix: ".", decimals, isDecimal: true };
    }
    const numeric = parseInt(raw.replace(/\D/g, ""), 10) || 0;
    const suffix = raw.replace(/[\d-]/g, "");
    return { numeric, suffix, prefix: "", decimals: 0, isDecimal: false };
  });

  return (
    <section className="w-full bg-primary-container text-on-primary border-b-4 border-on-surface py-10 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-on-primary/30 pb-3 gap-2">
          <span className="font-label-code text-label-code uppercase tracking-widest text-on-primary-container flex items-center gap-2">
            <MaterialIcon name="precision_manufacturing" className="text-sm" />
            {statsRibbon.label}
          </span>
          <span className="font-label-tracking text-label-tracking uppercase tracking-widest text-on-primary bg-primary px-3 py-0.5 border border-on-primary/40">
            {statsRibbon.cert}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsRibbon.items.map((item, i) => {
            const d = itemsData[i];
            return (
              <div key={item.title} className="border-l-4 border-on-primary pl-4 py-1">
                <div className="font-display-hero text-4xl sm:text-display-hero font-black leading-none mb-1 text-on-primary flex items-baseline gap-1">
                  {d.isDecimal ? (
                    <span className="font-display-hero text-4xl sm:text-display-hero font-black">
                      −
                    </span>
                  ) : null}
                  <AnimatedNumber
                    target={d.numeric}
                    suffix={d.suffix}
                    prefix={d.prefix}
                    decimals={d.decimals}
                    duration={1200}
                    className="font-display-hero text-4xl sm:text-display-hero font-black"
                  />
                </div>
                <div className="font-headline-sm text-headline-sm uppercase text-on-primary-container">
                  {item.title}
                </div>
                <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
