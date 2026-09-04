import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/MaterialIcon";

export type Step = {
  label: string;
  icon: string;
};

export function Stepper({
  steps,
  current,
}: {
  steps: Step[];
  current: number;
}) {
  return (
    <ol className="flex flex-col sm:flex-row gap-2 sm:items-center">
      {steps.map((step, i) => {
        const done = i < current;
        const isCurrent = i === current;
        const isLast = i === steps.length - 1;
        return (
          <li key={step.label} className="flex items-center gap-2 flex-1">
            <div
              className={cn(
                "flex items-center gap-2 w-full border-2 px-3 py-2",
                done &&
                  "bg-tertiary text-white border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b]",
                isCurrent &&
                  "bg-primary-container text-white border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b]",
                !done &&
                  !isCurrent &&
                  "bg-surface-container-lowest text-on-surface-variant border-on-surface/50",
              )}
            >
              <span
                className={cn(
                  "shrink-0 w-6 h-6 flex items-center justify-center border-2",
                  done ? "border-white text-white" : "border-current",
                )}
              >
                {done ? (
                  <MaterialIcon name="check" className="!text-sm" />
                ) : (
                  <span className="text-xs font-mono font-bold">{i + 1}</span>
                )}
              </span>
              <span className="flex items-center gap-1.5 font-label-code text-label-code uppercase tracking-wider">
                <MaterialIcon name={step.icon} className="!text-base" />
                <span className="truncate">{step.label}</span>
              </span>
            </div>
            {!isLast && (
              <span className="hidden sm:block mx-1 text-on-surface/40">
                <MaterialIcon name="arrow_forward" className="!text-base" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
