import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, id, name, ...props }, ref) => {
    const inputId =
      id || name || label?.toLowerCase().replace(/\s+/g, "-") || "input-field";

    return (
      <div className="space-y-2">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-200">
            {label}
          </label>
        ) : null}

        <input
          ref={ref}
          id={inputId}
          name={name}
          className={cn(
            "h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-blue-400/60 focus:bg-white/[0.07]",
            className
          )}
          {...props}
        />

        {hint ? <p className="text-xs text-slate-400">{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;