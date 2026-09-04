"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { bookingContent } from "@/content/booking";

export function BookingHeader() {
  const { statusBar, steps } = bookingContent;
  const [timer, setTimer] = useState("09:42");
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const mins = Math.floor((now.getTime() / 1000 / 60) % 60);
      const secs = Math.floor((now.getTime() / 1000) % 60);
      setTimer(`${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentStep = pathname.includes("/assentos") ? 2 : pathname.includes("/confirmacao") ? 4 : 1;

  return (
    <div className="w-full">
      <div className="bg-surface-container-high border-b-2 border-on-surface px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3 font-label-code text-label-code uppercase">
          <span className="text-primary-container">{statusBar.label}</span>
          <span className="text-on-surface-variant">{'//'}</span>
          <span>EMISSÃO INSTANTÂNEA E-TICKET</span>
          <span className="text-on-surface-variant">{'//'}</span>
          <span className="hidden sm:inline">{statusBar.sessionLabel}</span>
          <span className="text-on-surface-variant">{'//'}</span>
          <span>{statusBar.sessionBlock}</span>
          <div className="ml-auto flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 text-on-primary shadow-[2px_2px_0px_0px_#0c1a3b]">
            <MaterialIcon name="timer" className="text-sm" />
            {timer}
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low border-b-4 border-on-surface px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant mb-4">
            <Link href="/" className="hover:text-primary-container">Início</Link>
            <MaterialIcon name="chevron_right" className="text-xs" />
            <span>Passagens e Horários</span>
            <MaterialIcon name="chevron_right" className="text-xs" />
            <span className="text-on-surface">Seleção de Rota & Assentos</span>
          </nav>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => {
              const stepNum = i + 1;
              const isDone = stepNum < currentStep;
              const isCurrent = stepNum === currentStep;
              return (
                <div
                  key={i}
                  className={`border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] ${
                    isCurrent
                      ? "bg-primary-container text-on-primary"
                      : isDone
                        ? "bg-tertiary text-on-tertiary"
                        : "bg-surface-container-low text-on-surface-variant"
                  }`}
                >
                  <div className="px-4 py-3 flex items-center gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-current ${
                      isDone ? "rounded-full" : ""
                    }`}>
                      {isDone ? (
                        <MaterialIcon name="check" className="text-base" />
                      ) : (
                        <span className="font-label-code text-label-code">{s.num}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-label-code text-label-code uppercase">
                        {isCurrent ? "EM ANDAMENTO" : isDone ? `ETAPA ${s.num} // OK` : `ETAPA ${s.num}`}
                      </div>
                      <div className="font-label-code text-label-code uppercase opacity-80">
                        {s.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}