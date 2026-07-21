"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/50 lg:block">
      <div className="p-5">
        <Link href="/" className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-900/40">
            CN
          </div>
          <div>
            <p className="font-semibold text-white">Campus Nexus</p>
            <p className="text-[11px] text-slate-400">Command Center</p>
          </div>
        </Link>

        <p className="mb-3 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Main Menu
        </p>

        <div className="space-y-1">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200",
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30 font-medium"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 p-5">
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-xs font-bold text-white">
            AR
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-[11px] text-slate-400">admin@campus.edu</p>
          </div>
        </div>
      </div>
    </aside>
  );
}