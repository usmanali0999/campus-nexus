"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";

type DropdownItem = {
  label: string;
  value: string;
  onClick: () => void;
};

type DropdownProps = {
  trigger?: ReactNode;
  label?: string;
  items: DropdownItem[];
};

export default function Dropdown({ trigger, label = "Options", items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div ref={ref} className="relative">
      {trigger ? (
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-200 transition hover:bg-white/10"
        >
          {label}
          <ChevronDown
            size={14}
            className={cn("transition-transform", isOpen && "rotate-180")}
          />
        </button>
      )}

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 min-w-[180px] rounded-xl border border-white/10 bg-slate-900 p-1.5 shadow-2xl">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="flex w-full items-center rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}