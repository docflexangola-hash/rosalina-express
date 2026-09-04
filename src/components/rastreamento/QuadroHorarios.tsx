"use client";

import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";

const statusCorClasses: Record<string, string> = {
  primary: "bg-primary-container text-on-primary",
  secondary: "bg-secondary text-on-secondary",
  tertiary: "bg-tertiary text-on-tertiary",
  "surface-container-highest": "bg-surface-container-highest text-on-surface",
};

const dotClasses: Record<string, string> = {
  "primary-container": "bg-primary-container",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  "surface-dim": "bg-surface-dim",
};

export function QuadroHorarios() {
  const { horarios } = rastreamentoContent;
  const [filter, setFilter] = useState("Todos");

  const filteredRows = useMemo(() => {
    if (filter === "Todos") return horarios.rows;
    return horarios.rows.filter((r) => r.route.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, horarios.rows]);

  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant mb-2">
          <MaterialIcon name={horarios.sublabelIcon} className="text-sm" />
          {horarios.sublabel}
        </div>
        <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-6">
          {horarios.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {horarios.filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-label-code text-label-code uppercase px-4 py-2 border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                filter === f
                  ? "bg-primary-container text-on-primary"
                  : "bg-surface-container-lowest text-on-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-highest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] overflow-x-auto">
          <table className="w-full font-body-sm text-body-sm text-on-surface">
            <thead>
              <tr className="bg-tertiary text-on-tertiary font-label-code text-label-code uppercase">
                {horarios.columns.map((c) => (
                  <th key={c} className="px-4 py-3 text-left border-r-2 border-secondary last:border-r-0">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((r, i) => (
                <tr
                  key={i}
                  className="bg-surface-container-lowest border-t-2 border-on-surface hover:bg-surface-container"
                >
                  <td className="px-4 py-3 font-headline-sm text-headline-sm text-primary-container border-r-2 border-outline-variant">
                    {r.prefix}
                  </td>
                  <td className="px-4 py-3 font-headline-sm text-headline-sm uppercase border-r-2 border-outline-variant">
                    {r.route}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant border-r-2 border-outline-variant">
                    {r.via}
                  </td>
                  <td className="px-4 py-3 font-label-code text-label-code uppercase border-r-2 border-outline-variant">
                    {r.hour}
                  </td>
                  <td className="px-4 py-3 border-r-2 border-outline-variant">
                    <span
                      className={`inline-flex items-center gap-1 ${statusCorClasses[r.statusCor]} border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase ${
                        r.status === "EMBARQUE IMEDIATO" ? "animate-pulse" : ""
                      }`}
                    >
                      <MaterialIcon name={r.statusIcon} className="text-sm" />
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-label-code text-label-code uppercase border-r-2 border-outline-variant">
                    {r.cais}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant border-r-2 border-outline-variant">
                    {r.tipo}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => window.alert(`${r.action} para ${r.prefix} (simulação)`)}
                      className="bg-tertiary text-on-tertiary border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase shadow-[2px_2px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#0c1a3b] transition-all inline-flex items-center gap-1"
                    >
                      {r.action}
                      <MaterialIcon name="arrow_forward" className="text-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-on-surface-variant font-label-code text-label-code uppercase">
          <div className="flex flex-wrap items-center gap-4">
            {horarios.legend.map((l) => (
              <span key={l.label} className="flex items-center gap-2">
                <span className={`w-2 h-2 ${dotClasses[l.dot]} border-2 border-on-surface`} />
                {l.label}
              </span>
            ))}
          </div>
          <span>{horarios.syncLabel}</span>
        </div>
      </div>
    </section>
  );
}