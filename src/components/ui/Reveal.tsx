"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  stagger?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  delay?: number;
};

export function Reveal({ children, stagger = 0, className = "", delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = stagger === 0 ? "reveal" : `reveal-stagger-${stagger}`;

  return (
    <div
      ref={ref}
      className={`${baseClass}${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay !== undefined ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
