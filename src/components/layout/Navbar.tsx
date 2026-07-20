import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { buttonStyles } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-900/40">
            CN
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Campus Nexus</p>
            <p className="text-xs text-slate-400">University CMS Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className={buttonStyles({ variant: "ghost" })}>
            Login
          </Link>
          <Link href="/dashboard" className={buttonStyles({ variant: "primary" })}>
            Open Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}