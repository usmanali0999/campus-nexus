import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

const variants: Record<BadgeVariant, string> = {
  default: "text-slate-300 bg-slate-400/10 border-slate-400/20",
  success: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  warning: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  danger: "text-red-300 bg-red-400/10 border-red-400/20",
  info: "text-blue-300 bg-blue-400/10 border-blue-400/20",
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}