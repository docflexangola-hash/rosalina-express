"use client";

import { useCountUp, useInView } from "@/lib/hooks";

type AnimatedNumberProps = {
  target?: number;
  value?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function AnimatedNumber({
  target,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1200,
  className,
}: AnimatedNumberProps) {
  const numeric = target ?? value ?? 0;
  const [ref, inView] = useInView<HTMLSpanElement>();
  const display = useCountUp(numeric, inView, duration, decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? parseFloat(display).toFixed(decimals) : Math.round(parseFloat(display)).toLocaleString("pt-AO")}
      {suffix}
    </span>
  );
}
