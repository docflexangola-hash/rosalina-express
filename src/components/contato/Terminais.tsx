"use client";

import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";

type Terminal = {
  cidade: string;
  nome: string;
  endereco: string;
  horario: string;
  telefone: string;
  cor: string;
};

const corClasses: Record<string, string> = {
  primary: "bg-primary-container text-on-primary",
  tertiary: "bg-tertiary text-on-tertiary",
  secondary: "bg-secondary text-on-secondary",
};

export function Terminais({
  badge,
  title,
  terminais,
}: {
  badge: string;
  title: string;
  terminais: Terminal[];
}) {
  const cidades = useMemo(() => ["TODAS", ...Array.from(new Set(terminais.map((t) => t.cidade)))], [terminais]);
  const [cidade, setCidade] = useState("TODAS");

  const filtrados = useMemo(
    () => (cidade === "TODAS" ? terminais : terminais.filter((t) => t.cidade === cidade)),
    [cidade, terminais],
  );

  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="storefront" className="text-sm" />
            {badge}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cidades.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCidade(c)}
              className={`font-label-code text-label-code uppercase px-4 py-2 border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                cidade === c
                  ? "bg-primary-container text-on-primary"
                  : "bg-surface-container-lowest text-on-surface"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((t, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6"
            >
              <div className="flex items-center justify-between">
                <span className={`${corClasses[t.cor]} border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase`}>
                  {t.cidade}
                </span>
                <MaterialIcon name="location_on" className="text-primary-container text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-4">
                {t.nome}
              </h3>
              <div className="mt-3 space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <MaterialIcon name="signpost" className="text-sm text-secondary" />
                  {t.endereco}
                </div>
                <div className="flex items-center gap-2">
                  <MaterialIcon name="schedule" className="text-sm text-secondary" />
                  {t.horario}
                </div>
                <div className="flex items-center gap-2">
                  <MaterialIcon name="call" className="text-sm text-secondary" />
                  {t.telefone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}