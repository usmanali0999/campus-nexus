import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}