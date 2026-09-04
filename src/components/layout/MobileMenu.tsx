"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";
import { MaterialIcon } from "@/components/MaterialIcon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center w-10 h-10 border-2 border-on-surface bg-surface-container-lowest shadow-[2px_2px_0px_0px_#0c1a3b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
      >
        <MaterialIcon
          name={open ? "close" : "menu"}
          className="!text-[22px] text-on-surface"
        />
      </button>

      <div
        className={`fixed inset-0 top-0 left-0 right-0 z-40 bg-on-surface/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed left-0 right-0 top-20 z-50 bg-surface-container-lowest border-b-2 border-on-surface shadow-[0_8px_24px_rgba(12,26,59,0.2)] transition-transform duration-200 origin-top xl:hidden ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <nav aria-label="Navegação móvel" className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-3 flex items-center justify-between font-label-code text-label-code uppercase tracking-wider border-b border-surface-container-high last:border-b-0 transition-colors ${
                  active
                    ? "bg-primary-container text-on-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {item.label}
                <MaterialIcon name="chevron_right" className="text-sm" />
              </Link>
            );
          })}
          <Link
            href="/rastreamento"
            className="mt-3 flex items-center justify-center gap-2 bg-primary-container text-on-primary font-headline-sm text-xs uppercase px-4 py-3 border-2 border-on-surface shadow-[3px_3px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <MaterialIcon name="confirmation_number" className="text-base" />
            <span>Rastrear Viagem / Bilhete</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
