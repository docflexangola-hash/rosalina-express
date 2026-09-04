import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function Imprensa() {
  const { imprensa } = noticiasContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6">
              <div className="flex items-center gap-2 mb-3">
                <MaterialIcon name={imprensa.card1.icon} className="text-sm text-primary-container" />
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  {imprensa.card1.label}
                </span>
              </div>
              <div className="font-display-hero text-display-hero text-white mt-2">
                {imprensa.card1.value}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                {imprensa.card1.sub}
              </p>
            </div>

            <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6">
              <div className="flex items-center gap-2 mb-3">
                <MaterialIcon name={imprensa.card2.icon} className="text-sm text-primary-container" />
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  {imprensa.card2.label}
                </span>
              </div>
              <div className="font-display-hero text-display-hero text-white mt-2">
                {imprensa.card2.value}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                {imprensa.card2.sub}
              </p>
            </div>

            <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6">
              <div className="flex items-center gap-2 mb-3">
                <MaterialIcon name={imprensa.card3.icon} className="text-sm text-primary-container" />
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  {imprensa.card3.label}
                </span>
              </div>
              <div className="font-display-hero text-display-hero text-white mt-2">
                {imprensa.card3.value}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                {imprensa.card3.sub}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6">
              <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface">
                PRÊMIO SEGURANÇA RODOVIÁRIA NACIONAL
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Recentemente condecorada com o Prémio Nacional de Segurança Rodoviária pela DNVT, a Rosalina Express mantém os mais altos padrões de formação de condutores, manutenção preventiva e cumprimento rigoroso de limites de velocidade em toda a frota nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}