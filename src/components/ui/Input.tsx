import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string; };

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, hint, error, id, name, ...props }, ref) => {
  const inputId = id || name || "input";
  return (
    <div className="space-y-2">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-slate-200">{label}</label>}
      <input ref={ref} id={inputId} name={name} className={cn("h-11 w-full rounded-xl border bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:bg-white/[0.07]", error ? "border-red-400/60" : "border-white/10 focus:border-blue-400/60", className)} {...props} />
      {error && <p className="text-xs text-red-400">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
