import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, inputClassName, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-label-code text-label-code uppercase tracking-wider text-on-surface"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 bg-surface-container-lowest border-2 border-on-surface text-on-surface placeholder:text-on-surface/40 focus:outline-none focus:border-primary-container",
            error ? "border-error" : "",
            inputClassName,
          )}
          {...props}
        />
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

Input.displayName = "Input";
