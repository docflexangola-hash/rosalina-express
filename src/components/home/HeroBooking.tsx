import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { MaterialIcon } from "@/components/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

const citiesOrigin = [
  "Luanda (Terminal Central - Ho Chi Minh)",
  "Benguela (Hub Sul)",
  "Lobito (Terminal Marítimo)",
  "Huambo (Planalto Central)",
];

const citiesDest = [
  "Benguela (Expresso Diário)",
  "Huambo (Planalto Central)",
  "Lobito (Terminal Comercial)",
  "Luanda (Central Rodoviária)",
];

export function HeroBooking() {
  const { hero, heroBoard } = homeContent;

  return (
    <section className="w-full border-b-4 border-on-surface bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x-2 border-on-surface">
        {/* Left Column: Command Hub & Booking Ticket Console */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-surface-container-lowest border-b-4 lg:border-b-0 lg:border-r-4 border-on-surface">
          <div>
            <Reveal stagger={1}>
              <div className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-3 py-1 text-label-tracking font-label-tracking uppercase border-2 border-on-surface shadow-[3px_3px_0px_0px_#0c1a3b] mb-6">
                <span className="inline-block w-2 h-2 bg-primary-container animate-ping" />
                <span>{hero.tag}</span>
              </div>
            </Reveal>

            <Reveal stagger={2}>
              <h1 className="font-display-hero text-display-hero uppercase tracking-tighter text-on-surface leading-none mb-4">
                {hero.titleTop}{" "}
                <span className="text-primary-container inline-block underline decoration-4 underline-offset-4">
                  {hero.titleAccent}
                </span>{" "}
                {hero.titleBottom}
              </h1>
            </Reveal>

            <Reveal stagger={3}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                {hero.description}
              </p>
            </Reveal>

            {/* Dynamic Booking Waybill Card */}
            <div className="bg-surface border-2 border-on-surface p-5 shadow-[5px_5px_0px_0px_#0c1a3b] relative">
              <div className="absolute -top-3 right-4 bg-primary-container text-on-primary font-label-code text-label-code px-2 py-0.5 border border-on-surface uppercase">
                {hero.widgetTag}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-label-code text-label-code uppercase tracking-wider text-on-surface mb-1 flex items-center gap-1">
                    <MaterialIcon
                      name="trip_origin"
                      className="text-sm text-primary-container"
                    />
                    Origem
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Origem"
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2.5 font-body-md text-body-md text-on-surface font-bold focus:outline-none appearance-none cursor-pointer pr-9"
                      defaultValue="luanda"
                    >
                      {citiesOrigin.map((c) => (
                        <option key={c} value={c.toLowerCase().split(" ")[0]}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <MaterialIcon
                      name="expand_more"
                      className="absolute right-3 top-3 pointer-events-none text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-code text-label-code uppercase tracking-wider text-on-surface mb-1 flex items-center gap-1">
                    <MaterialIcon
                      name="location_on"
                      className="text-sm text-primary-container"
                    />
                    Destino
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Destino"
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2.5 font-body-md text-body-md text-on-surface font-bold focus:outline-none appearance-none cursor-pointer pr-9"
                      defaultValue="benguela"
                    >
                      {citiesDest.map((c) => (
                        <option
                          key={c}
                          value={c.toLowerCase().split(" ")[0]}
                        >
                          {c}
                        </option>
                      ))}
                    </select>
                    <MaterialIcon
                      name="expand_more"
                      className="absolute right-3 top-3 pointer-events-none text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-code text-label-code uppercase tracking-wider text-on-surface mb-1 flex items-center gap-1">
                    <MaterialIcon
                      name="calendar_today"
                      className="text-sm text-primary-container"
                    />
                    Data de Partida
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-03-31"
                    aria-label="Data de Partida"
                    className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-md text-body-md text-on-surface font-bold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-label-code text-label-code uppercase tracking-wider text-on-surface mb-1 flex items-center gap-1">
                    <MaterialIcon
                      name="directions_bus"
                      className="text-sm text-primary-container"
                    />
                    Tipo de Linha
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Tipo de Linha"
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2.5 font-body-md text-body-md text-on-surface font-bold focus:outline-none appearance-none cursor-pointer pr-9"
                      defaultValue="express"
                    >
                      {hero.services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <MaterialIcon
                      name="expand_more"
                      className="absolute right-3 top-3 pointer-events-none text-on-surface"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/booking"
                  className="w-full sm:w-auto flex-1 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-6 py-3.5 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="confirmation_number" />
                  <span>Consultar Horários e Bilhetes</span>
                </Link>
                <Link
                  href="/rastreamento"
                  className="w-full sm:w-auto bg-tertiary text-on-tertiary font-headline-sm text-headline-sm uppercase px-5 py-3.5 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="radar" />
                  <span>Rastrear</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Terminal Coordinates Micro-bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-label-code font-label-code uppercase tracking-wider text-on-surface border-t-2 border-on-surface/20 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container" />
              <span>{hero.microBar.base}</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-tertiary">
              <span>[{hero.microBar.frota}]</span>
              <span>[{hero.microBar.despachos}]</span>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Navy Visual Dynamic Board */}
        <div className="lg:col-span-5 bg-tertiary text-on-tertiary p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-1 font-label-code text-label-code text-secondary-container">
            <MaterialIcon name="hub" className="text-sm" />
            <span>{heroBoard.corridorRef}</span>
          </div>

          <div className="space-y-6 relative z-10">
            <Reveal stagger={2}>
              <div className="border-b-2 border-secondary/40 pb-4">
                <span className="text-secondary-container font-label-tracking text-label-tracking uppercase tracking-widest block mb-1">
                  PROGRAMAÇÃO METRO-BUS
                </span>
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="font-headline-lg text-headline-lg uppercase text-on-tertiary tracking-tight">
                    {heroBoard.programTitle}
                  </h2>
                  <span className="bg-primary-container text-on-primary px-2 py-0.5 font-label-code text-label-code border border-on-surface brutal-pulse">
                    STATUS: {heroBoard.status}
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="relative border-4 border-on-surface bg-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] overflow-hidden group">
              <Image
                src={heroBoard.image}
                alt="Autocarro de passageiros da Rosalina Express em avenida de terminal"
                width={640}
                height={360}
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-tertiary/90 text-on-tertiary px-3 py-2 border-t-2 border-on-surface flex items-center justify-between text-label-tracking font-label-tracking uppercase">
                <span>{heroBoard.fleetLabel}</span>
                <span className="text-secondary-container font-bold">
                  {heroBoard.imageTagline}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {heroBoard.routes.map((r) => (
                <div
                  key={r.label}
                  className="bg-tertiary-container border-2 border-on-surface p-3 shadow-[3px_3px_0px_0px_#0c1a3b]"
                >
                  <span className="font-label-tracking text-label-tracking text-on-tertiary-container uppercase block">
                    {r.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm uppercase text-on-tertiary">
                    {r.value}
                  </span>
                  <span className="font-label-code text-[10px] text-secondary-fixed block mt-1">
                    {r.saídas}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 border-t-2 border-secondary/40 relative z-10 mt-6">
            {heroBoard.stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface-container-lowest text-on-surface border-2 border-on-surface p-2.5 text-center shadow-[3px_3px_0px_0px_#0c1a3b]"
              >
                <MaterialIcon
                  name={s.icon}
                  className="text-primary-container text-xl block mb-1"
                />
                <span className="font-headline-lg text-headline-lg block text-on-surface leading-none font-black">
                  {s.value}
                </span>
                <span className="font-label-tracking text-[10px] text-on-surface-variant uppercase font-bold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
