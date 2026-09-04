"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function FiltrosNoticias() {
  const { filtros } = noticiasContent;
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleCategory = (label: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <div className="relative">
              <MaterialIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" />
              <input
                type="text"
                placeholder={filtros.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none pl-10"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSearch("")}
            className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-6 py-3 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
          >
            <MaterialIcon name="search" className="text-sm" />
            <span>Buscar</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {filtros.categorias.map((c: { label: string; active: boolean }) => (
            <button
              key={c.label}
              type="button"
              onClick={() => toggleCategory(c.label)}
              className={`flex items-center gap-2 px-4 py-2 font-label-code text-label-code uppercase border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] transition-all ${
                activeFilters.has(c.label)
                  ? "bg-tertiary text-on-tertiary"
                  : "bg-surface-container-high text-on-surface"
              }`}
            >
              <MaterialIcon name={c.active ? "radio_button_checked" : "radio_button_unchecked"} className="text-xs" />
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}