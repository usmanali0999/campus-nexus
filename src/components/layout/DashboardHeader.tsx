"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import MobileSidebar from "./MobileSidebar";

export default function DashboardHeader() {
  return (
    <div className="border-b border-white/10 bg-slate-950/30 px-6 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
              University Command Center
            </p>
            <h2 className="mt-1 text-xl font-semibold text-white">
              Executive Dashboard
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white md:flex">
            <Search size={16} />
          </button>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white">
            <Bell size={16} />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              3
            </span>
          </button>

          <Link href="/" className={buttonStyles({ variant: "secondary", size: "sm" })}>
            Public Site
          </Link>

          <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-xs font-bold text-white md:flex">
            AR
          </div>
        </div>
      </div>
    </div>
  );
}