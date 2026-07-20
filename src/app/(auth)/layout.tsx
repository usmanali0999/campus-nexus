import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] backdrop-blur-xl">
        {children}
      </div>
    </main>
  );
}