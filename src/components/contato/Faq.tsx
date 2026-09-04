"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { contatoContent } from "@/content/contato";

export function Faq() {
  const { faq } = contatoContent;
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-surface-container-highest border-2 border-on-surface px-3 py-1 font-label-tracking text-label-tracking uppercase text-tertiary">
            <MaterialIcon name="help" className="text-sm" />
            {faq.badge}
          </span>
          <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-none tracking-tight mt-4">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <div
                key={i}
                className="bg-surface-container-lowest border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b]"
              >
                <button
                  type="button"
                  onClick={() => setAberto(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    {item.q}
                  </span>
                  <MaterialIcon
                    name={isOpen ? "remove" : "add"}
                    className="text-primary-container text-xl flex-shrink-0"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 border-t-2 border-outline-variant pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}