"use client";

type RevealProps = {
  children: React.ReactNode;
  stagger?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  delay?: number;
};

export function Reveal({ children, stagger = 0, className = "", delay }: RevealProps) {
  const baseClass = stagger === 0 ? "reveal" : `reveal-stagger-${stagger}`;
  return (
    <div
      className={`${baseClass} ${className}`}
      style={delay !== undefined ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
