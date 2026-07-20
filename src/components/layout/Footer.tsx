import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Campus Nexus</h3>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A modern university CMS and operations frontend designed for public
            communication, academic workflows, and institutional dashboards.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Navigation
          </h4>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>admin@campusnexus.edu</p>
            <p>+92 300 1234567</p>
            <p>University Avenue, Knowledge City</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Campus Nexus. All rights reserved.
      </div>
    </footer>
  );
}