import { MaterialIcon } from "@/components/MaterialIcon";
import { contatoContent } from "@/content/contato";

const corClasses: Record<string, string> = {
  primary: "bg-primary-container text-on-primary",
  tertiary: "bg-tertiary text-on-tertiary",
  secondary: "bg-secondary text-on-secondary",
};

export function InfoCards() {
  const { infoCards } = contatoContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((c) => (
            <div
              key={c.title}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6"
            >
              <span className={`inline-flex items-center justify-center w-12 h-12 border-2 border-on-surface ${corClasses[c.cor]}`}>
                <MaterialIcon name={c.icon} className="text-2xl" />
              </span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-4">
                {c.title}
              </h3>
              <p className="font-headline-md text-headline-md text-primary-container mt-1">
                {c.text}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {c.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}