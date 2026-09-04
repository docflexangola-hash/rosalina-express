import Image from "next/image";
import { MaterialIcon } from "@/components/MaterialIcon";
import { sobreContent } from "@/content/sobre";

export function Lideranca() {
  const { lideranca } = sobreContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="bg-tertiary border-4 border-on-surface p-4 shadow-[8px_8px_0px_0px_#0c1a3b]">
              <div className="flex items-center justify-between border-b-2 border-secondary pb-3 mb-3 text-on-tertiary font-label-code text-label-code uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-container" />
                  {lideranca.imageHeader}
                </span>
                <span>{lideranca.imageTag}</span>
              </div>
              <div className="relative">
                <Image
                  src={lideranca.image}
                  alt="Reunião de alinhamento tático na Sala de Comando Central"
                  width={960}
                  height={560}
                  className="w-full aspect-[16/9] object-cover border-2 border-on-surface"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary-container text-on-primary border-t-2 border-on-surface px-4 py-3">
                  <div className="font-label-code text-label-code uppercase mb-0.5 opacity-80">
                    {lideranca.captionText.slice(0, 80)}...
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 font-label-code text-label-code uppercase text-primary-fixed border-2 border-primary-fixed px-3 py-2">
                <MaterialIcon name="shield" className="text-sm" />
                {lideranca.overlay}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[4px_4px_0px_0px_#0c1a3b]">
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
                {lideranca.cardTitle}
              </h2>
              <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary mt-3">
                {lideranca.cardBadge}
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                {lideranca.text}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {lideranca.cheks.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-tertiary border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-tertiary"
                  >
                    <MaterialIcon name="check" className="text-sm text-primary-fixed" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {lideranca.pilares.map((p, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest border-2 border-on-surface p-5 shadow-[4px_4px_0px_0px_#0c1a3b]"
                >
                  <div className="flex items-center gap-3">
                    <MaterialIcon
                      name={p.icon}
                      className="text-primary-container text-2xl"
                    />
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2 ml-9">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}