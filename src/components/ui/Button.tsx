import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_12px_30px_-12px_rgba(37,99,235,0.8)]",
  secondary: "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 backdrop-blur-xl",
  ghost: "text-slate-200 hover:bg-white/8",
  danger: "bg-red-600 text-white hover:bg-red-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonStyles({ variant = "primary", size = "md", className }: { variant?: ButtonVariant; size?: ButtonSize; className?: string; }) {
  return cn(baseStyles, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize; };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  return <button ref={ref} className={buttonStyles({ variant, size, className })} {...props} />;
});

Button.displayName = "Button";
export default Button;
