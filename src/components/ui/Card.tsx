import { cn } from "@/lib/utils";

type CardProps = {
  variant?: "default" | "highlight" | "flat" | "dark";
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  default: "bg-surface-container-lowest shadow-[4px_4px_0px_0px_#0c1a3b] border-2 border-on-surface",
  highlight: "bg-surface-container-low shadow-[4px_4px_0px_0px_#0c1a3b] border-2 border-on-surface",
  flat: "bg-surface-container-lowest border-2 border-on-surface",
  dark: "bg-tertiary text-white shadow-[4px_4px_0px_0px_#0c1a3b] border-2 border-on-surface",
};

export function Card({ variant = "default", hover = false, className, children }: CardProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        hover &&
          "transition-transform transition-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("p-5 border-b-2 border-on-surface", className)}>{children}</div>
  );
}

export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("p-5 border-t-2 border-on-surface bg-surface-container-low", className)}>
      {children}
    </div>
  );
}
