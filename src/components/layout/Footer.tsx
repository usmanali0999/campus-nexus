import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">CN</div>
            <p className="font-semibold text-white">Campus Nexus</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">A modern university CMS and operations platform designed for academic institutions at enterprise scale.</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Navigation</h4>
          <div className="grid gap-2.5">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white">{link.label}</Link>))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Contact</h4>
          <div className="space-y-2.5 text-sm text-slate-400">
            <p>admin@campusnexus.edu</p>
            <p>+92 300 1234567</p>
            <p>University Avenue, Knowledge City</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">Campus Nexus - All rights reserved.</div>
    </footer>
  );
}
