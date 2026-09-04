import { cn } from "@/lib/utils";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "success"
  | "alert";

type BadgeProps = {
  variant?: BadgeVariant;
  clip?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary-container text-white border-primary",
  secondary: "bg-tertiary-container text-white border-secondary",
  tertiary: "bg-tertiary text-white border-tertiary-container",
  outline: "bg-surface-container-lowest text-on-surface border-on-surface",
  success: "bg-emerald-700 text-white border-emerald-900",
  alert: "bg-error-container text-on-error-container border-error",
};

export function Badge({
  variant = "primary",
  clip = false,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-[0.6875rem] uppercase tracking-widest font-bold border-2",
        variantClasses[variant],
        clip && "clip-tag",
        className,
      )}
    >
      {children}
    </span>
  );
}
