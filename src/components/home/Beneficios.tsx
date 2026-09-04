import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Beneficios() {
  const { beneficios } = homeContent;
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-tertiary text-on-tertiary border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-3 py-1 font-label-code text-label-code uppercase border border-on-surface">
            <MaterialIcon name="star" className="text-sm" />
            {beneficios.badge}
          </div>
          <h2 className="font-display-hero text-display-hero uppercase text-on-tertiary tracking-tight">
            {beneficios.title}
          </h2>
          <p className="font-body-lg text-body-lg text-secondary-fixed-dim">
            {beneficios.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.items.map((b, i) => (
            <Reveal key={b.num} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <div
                className="bg-surface-container-lowest text-on-surface border-4 border-on-surface p-6 shadow-[6px_6px_0px_0px_#0c1a3b] card-brutal relative flex flex-col justify-between h-full"
              >
                <div className="absolute -top-4 -left-2 bg-primary-container text-on-primary w-10 h-10 border-2 border-on-surface flex items-center justify-center font-headline-sm text-headline-sm">
                  {b.num}
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 bg-surface-container-high border-2 border-on-surface flex items-center justify-center mb-4">
                    <MaterialIcon
                      name={b.icon}
                      className="text-3xl text-primary-container"
                    />
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase mb-2">
                    {b.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {b.text}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t-2 border-on-surface/20 flex items-center gap-2 font-label-code text-label-code uppercase text-tertiary">
                  <MaterialIcon name="check_circle" className="text-sm text-primary-container" />
                  <span>{b.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
