import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label?: string;
  error?: string;
  hint?: string;
  options: Option[];
  className?: string;
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, hint, options, className, placeholder, id, ...props },
    ref,
  ) => {
    const selectId = id ?? props.name;
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="font-label-code text-label-code uppercase tracking-wider text-on-surface"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-3 bg-surface-container-lowest border-2 border-on-surface text-on-surface focus:outline-none focus:border-primary-container",
            error ? "border-error" : "",
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="font-mono text-xs text-error" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="font-mono text-xs text-on-surface/50">{hint}</p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
