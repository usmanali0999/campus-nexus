import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Admissions", href: "/admissions" },
    { label: "Departments", href: "/departments" },
    { label: "Events", href: "/events" },
    { label: "Notices", href: "/notices" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Dashboard", href: "/dashboard" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              CN
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
                Campus Nexus
              </p>
              <p className="text-sm text-slate-500">
                Enterprise-grade university experience
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            A modern university CMS and portal interface designed for academic
            institutions to manage departments, faculty, admissions, notices,
            events, and internal operations with clarity and scale.
          </p>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              {group}
            </h3>
            <div className="mt-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-600 transition-colors hover:text-cyan-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Campus Nexus. All rights reserved.</p>
          <p>Built with Next.js for a modern university digital ecosystem.</p>
        </div>
      </div>
    </footer>
  );
}