import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700",
        className
      )}
      {...props}
    />
  );
}