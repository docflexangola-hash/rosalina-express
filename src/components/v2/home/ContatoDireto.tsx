import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { v2HomeContent } from "@/content/v2/home";

export function ContatoDireto() {
  const { contato } = v2HomeContent;
  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
              <MaterialIcon name="support_agent" className="text-sm" />
              {contato.badge}
            </span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {contato.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              {contato.horario}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-surface border-2 border-on-surface p-6 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal h-full">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-outline-variant pb-3">
                <MaterialIcon
                  name="phone"
                  className="text-primary-container text-xl"
                />
                <span className="font-label-code text-label-code uppercase text-on-surface">
                  Telefones
                </span>
              </div>
              <div className="space-y-3">
                {contato.phones.map((p, i) => (
                  <a
                    key={i}
                    href={`tel:${p.value.replace(/\s/g, "")}`}
                    className="flex items-center justify-between p-3 bg-surface-container border-2 border-on-surface hover:bg-surface-container-high transition-colors group"
                  >
                    <span className="font-label-code text-label-code uppercase text-on-surface">
                      {p.label}
                    </span>
                    <span className="font-label-code text-label-code text-primary-container group-hover:underline">
                      {p.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal stagger={2}>
            <div className="bg-surface border-2 border-on-surface p-6 shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal h-full">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-outline-variant pb-3">
                <MaterialIcon
                  name="email"
                  className="text-primary-container text-xl"
                />
                <span className="font-label-code text-label-code uppercase text-on-surface">
                  Emails
                </span>
              </div>
              <div className="space-y-3">
                {contato.emails.map((e, i) => (
                  <a
                    key={i}
                    href={`mailto:${e.value}`}
                    className="flex items-center justify-between p-3 bg-surface-container border-2 border-on-surface hover:bg-surface-container-high transition-colors group"
                  >
                    <span className="font-label-code text-label-code uppercase text-on-surface">
                      {e.label}
                    </span>
                    <span className="font-label-code text-label-code text-primary-container group-hover:underline break-all">
                      {e.value}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${contato.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-green-600 text-white font-label-code text-label-code uppercase px-4 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
              >
                <MaterialIcon name="chat" className="text-lg" />
                {contato.whatsapp.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
