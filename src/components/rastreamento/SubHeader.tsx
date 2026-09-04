"use client";

import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Reveal } from "@/components/ui/Reveal";

export function SubHeader() {
  const {
    telemetrySublabel,
    liveBadge,
    title,
    clockLabel,
  } = rastreamentoContent.subHeader;
  const { stats } = rastreamentoContent;

  const [luandaTime, setLuandaTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const beirutTime = now.toLocaleString("pt-AO", {
        timeZone: "Africa/Luanda",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setLuandaTime(beirutTime);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-label-code text-label-code uppercase">
            <MaterialIcon name="warning" className="text-sm text-primary-container" />
            <span>{telemetrySublabel}</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface">
            <span className="font-label-code text-label-code uppercase text-secondary">
              {clockLabel}
            </span>
              <div className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero text-white bg-tertiary px-4 py-2 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal animate-pulse">
              {luandaTime || "--:--:--"}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary">
              <MaterialIcon name="hub" className="text-xs" />
              {liveBadge}
            </span>
            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((s: { label: string; value: string }, i: number) => (
              <Reveal key={i} stagger={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div
                  className="bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] card-brutal p-4 text-center"
                >
                  <div className="font-headline-md text-headline-md uppercase text-primary-container">
                    <AnimatedNumber value={parseInt(s.value.replace(/\D/g, ""), 10) || 0} />
                  </div>
                  <div className="font-label-code text-label-code uppercase text-on-surface-variant text-sm">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}