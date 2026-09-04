"use client";

import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";

const corClasses: Record<string, string> = {
  "primary-container": "bg-primary-container text-on-primary",
  tertiary: "bg-tertiary text-on-tertiary",
  secondary: "bg-secondary text-on-secondary",
  "surface-container-highest": "bg-surface-container-highest text-on-surface",
};

function ETA({ eta, pulsing }: { eta: string; pulsing: boolean }) {
  const [time, setTime] = useState(eta);

  useEffect(() => {
    const parse = (s: string) => {
      const m = s.match(/(\d+)\s*MIN/);
      return m ? parseInt(m[1], 10) : 0;
    };
    let mins = parse(eta);
    const interval = setInterval(() => {
      mins = Math.max(0, mins - 1);
      setTime(`${mins} MIN ${mins <= 5 ? "!" : "RESTANTES"}`);
    }, 60000);
    return () => clearInterval(interval);
  }, [eta]);

  return (
    <span className={`font-label-code text-label-code uppercase ${pulsing ? "animate-pulse text-primary-container" : ""}`}>
      {time}
    </span>
  );
}

export function RedeVoltas() {
  const { voltas } = rastreamentoContent;

  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant mb-2">
          <MaterialIcon name={voltas.sublabelIcon} className="text-sm" />
          {voltas.sublabel}
        </div>
        <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-3">
          {voltas.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 max-w-3xl">
          {voltas.paragraph}
        </p>
        <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary mb-8">
          <MaterialIcon name="schedule" className="text-xs" />
          {voltas.freqBadge}
        </span>

        <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-4 mb-8">
          <div className="font-label-code text-label-code uppercase text-primary-fixed mb-1">
            {voltas.terminalOverlay}
          </div>
          <div className="font-label-code text-label-code uppercase text-on-tertiary">
            {voltas.terminalFleet}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {voltas.lines.map((l, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-headline-md text-headline-md uppercase text-on-surface">
                  {l.code}
                </span>
                <span className={`${corClasses[l.cor]} ${l.etaPulsing ? "brutal-pulse" : ""} border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase`}>
                  {l.etaPulsing ? "LIVE" : "AGENDADO"}
                </span>
              </div>
              <div className="font-headline-sm text-headline-sm uppercase text-on-surface mb-2">
                {l.route}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                {l.nextStop}
              </div>
              <div className="flex items-center justify-between mb-4">
                <ETA eta={l.eta} pulsing={l.etaPulsing} />
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {l.occupancy}
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant">
                <MaterialIcon name="directions_bus" className="text-sm" />
                {l.fleet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
