import { cn } from "@/lib/utils";

export function Table({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("overflow-x-auto border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] bg-surface-container-lowest", className)}>
      <table className="w-full text-left border-collapse min-w-[32rem]">{children}</table>
    </div>
  );
}

export function TableHead({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <thead className={cn("bg-tertiary text-white", className)}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <tbody className={cn(className)}>{children}</tbody>;
}

export function TableRow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <tr
      className={cn(
        "border-b-2 border-surface-container-high last:border-b-0 odd:bg-surface even:bg-surface-container-low hover:bg-surface-container",
        className,
      )}
    >
      {children}
    </tr>
  );
}

export function TableHeaderCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <th className={cn("px-4 py-3 font-label-code text-label-code uppercase tracking-wider text-white", className)}>
      {children}
    </th>
  );
}

export function TableCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return <td className={cn("px-4 py-3 font-body-sm text-body-sm text-on-surface", className)}>{children}</td>;
}
