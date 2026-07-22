import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-900/40">
            CN
          </div>
          <p className="text-lg font-semibold text-white">Campus Nexus</p>
        </Link>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] backdrop-blur-xl">
          {children}
        </div>
      </div>
    </main>
  );
}