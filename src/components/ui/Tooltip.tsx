"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom";
};

export default function Tooltip({
  content,
  children,
  position = "top",
}: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={cn(
            "absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-white shadow-lg border border-white/10",
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}