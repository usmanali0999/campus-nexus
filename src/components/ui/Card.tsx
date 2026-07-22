import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & { hover?: boolean; };

export default function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(59,130,246,0.18)]", hover && "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]", className)} {...props} />
  );
}
