"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";

export function BuscaRadar() {
  const { busca } = rastreamentoContent;
  const [tab, setTab] = useState<"passenger" | "cargo">("passenger");
  const [passengerCode, setPassengerCode] = useState("RE-014");
  const [cargoCode, setCargoCode] = useState("");

  return (
    <section id="busca-radar" className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-6 font-label-code text-label-code uppercase text-on-surface-variant">
          <span>{'///'} {busca.cornerRef}</span>
        </div>
        <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
          <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4 flex flex-wrap items-center gap-3">
            <MaterialIcon name={busca.badgeIcon} className="text-base text-primary-fixed" />
            <span className="font-label-code text-label-code uppercase">
              {busca.badge}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight">
              {busca.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3 max-w-2xl">
              {busca.paragraph}
            </p>

            <div className="mt-6 border-2 border-on-surface inline-flex">
              {busca.tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id as "passenger" | "cargo")}
                  className={`px-4 py-3 font-label-code text-label-code uppercase flex items-center gap-2 border-r-2 border-on-surface last:border-r-0 ${
                    tab === t.id
                      ? "bg-primary-container text-on-primary"
                      : "bg-surface-container-high text-on-surface"
                  }`}
                >
                  <MaterialIcon name={t.icon} className="text-base" />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {tab === "passenger" ? (
              <div className="mt-6">
                <label className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2 flex items-center gap-2">
                  <MaterialIcon name={busca.passenger.labelIcon} className="text-base text-secondary" />
                  {busca.passenger.label}
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={passengerCode}
                    onChange={(e) => setPassengerCode(e.target.value)}
                    placeholder={busca.passenger.placeholder}
                    className="flex-1 bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (passengerCode) {
                        window.alert(`Localizar no Radar: ${passengerCode} (simulação)`);
                      }
                    }}
                    className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MaterialIcon name={busca.passenger.btnIcon} />
                    {busca.passenger.btn}
                  </button>
                </div>
                <div className="mt-4">
                  <span className="font-label-code text-label-code uppercase text-on-surface-variant">
                    {busca.passenger.suggestionsLabel}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {busca.passenger.suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setPassengerCode(s.split(" ")[0])}
                        className="font-label-code text-label-code uppercase bg-surface-container-low border-2 border-on-surface px-3 py-1 shadow-[2px_2px_0px_0px_0px_#0c1a3b] hover:bg-secondary hover:text-on-secondary transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <label className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2 flex items-center gap-2">
                  <MaterialIcon name={busca.cargo.labelIcon} className="text-base text-secondary" />
                  {busca.cargo.label}
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={cargoCode}
                    onChange={(e) => setCargoCode(e.target.value)}
                    placeholder={busca.cargo.placeholder}
                    className="flex-1 bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (cargoCode) {
                        window.alert(`Verificar Carga: ${cargoCode} (simulação)`);
                      }
                    }}
                    className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MaterialIcon name={busca.cargo.btnIcon} />
                    {busca.cargo.btn}
                  </button>
                </div>
                <div className="mt-4">
                  <span className="font-label-code text-label-code uppercase text-on-surface-variant">
                    {busca.cargo.suggestionsLabel}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {busca.cargo.suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setCargoCode(s.split(" ")[0])}
                        className="font-label-code text-label-code uppercase bg-surface-container-low border-2 border-on-surface px-3 py-1 hover:bg-secondary hover:text-on-secondary transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}