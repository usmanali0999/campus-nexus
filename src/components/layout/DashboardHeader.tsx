import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";

export default function DashboardHeader() {
  return (
    <div className="border-b border-white/10 bg-slate-950/30 px-6 py-5 backdrop-blur-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            University Command Center
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Executive Dashboard
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Monitor operations, content flows, academic modules, and platform health.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/" className={buttonStyles({ variant: "secondary" })}>
            Public Site
          </Link>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
            AR
          </div>
        </div>
      </div>
    </div>
  );
}