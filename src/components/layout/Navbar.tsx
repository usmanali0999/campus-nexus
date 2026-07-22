"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/navLinks";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">CN</div>
          <div>
            <p className="text-sm font-semibold text-white">Campus Nexus</p>
            <p className="text-[11px] text-slate-400">University CMS Platform</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">{link.label}</Link>))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className={buttonStyles({ variant: "ghost", size: "sm" })}>Login</Link>
          <Link href="/dashboard" className={buttonStyles({ variant: "primary", size: "sm" })}>Dashboard</Link>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 hover:bg-white/10 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{link.label}</Link>))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileOpen(false)} className={cn(buttonStyles({ variant: "secondary" }), "w-full")}>Login</Link>
            <Link href="/dashboard" onClick={() => setMobileOpen(false)} className={cn(buttonStyles({ variant: "primary" }), "w-full")}>Dashboard</Link>
          </div>
        </div>
      )}
    </header>
  );
}
