"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { MaterialIcon } from "@/components/MaterialIcon";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest">
      <div className="bg-tertiary text-on-tertiary border-b border-on-surface px-4 py-1 flex items-center justify-between text-xs font-label-tracking tracking-widest uppercase overflow-hidden">
        <div className="flex items-center gap-4 flex-wrap min-w-0">
          <div className="flex items-center gap-1.5">
            <MaterialIcon
              name="domain"
              className="text-sm text-secondary-container"
            />
            <span className="truncate">{site.central}</span>
          </div>
          <span className="hidden sm:inline opacity-40">|</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <MaterialIcon
              name="call"
              className="text-sm text-secondary-container"
            />
            <span>{site.phone}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-block w-2 h-2 bg-secondary-container animate-pulse" />
          <span className="bg-on-tertiary-fixed text-on-tertiary px-2 py-0.5 border border-secondary font-bold tracking-wider">
            {site.status}
          </span>
        </div>
      </div>

      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b-2 border-on-surface bg-surface-container-lowest">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2 p-1.5 bg-surface-container-lowest border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_0px_#0c1a3b] transition-all">
            <Image
              src="/logo.webp"
              alt="Logo da Rosalina Express"
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface font-black leading-none">
              Rosalina Express
            </span>
            <span className="font-label-tracking text-label-tracking uppercase tracking-widest text-primary font-bold mt-1">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "px-3 py-1.5 font-label-code text-label-code uppercase tracking-wider bg-primary-container text-on-primary font-bold shadow-[2px_2px_0px_0px_#0c1a3b] transition-all"
                    : "px-3 py-1.5 font-label-code text-label-code uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/rastreamento"
            className="hidden md:inline-flex items-center gap-2 bg-primary-container text-on-primary font-headline-sm text-xs uppercase px-4 py-2.5 border-2 border-on-surface shadow-[3px_3px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <MaterialIcon name="confirmation_number" className="text-base" />
            <span>Rastrear Viagem / Bilhete</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
