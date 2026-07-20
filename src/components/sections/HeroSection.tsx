import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="px-6 pb-16 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
            Enterprise University CMS
          </span>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              One unified frontend for your university’s public presence and internal operations.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Campus Nexus centralizes admissions, departments, notices, events,
              academic content, and role-based dashboards in one scalable product shell.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/dashboard" className={buttonStyles({ variant: "primary", size: "lg" })}>
              Launch Dashboard
            </Link>
            <Link href="/admissions" className={buttonStyles({ variant: "secondary", size: "lg" })}>
              Explore Admissions
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-5">
              <ShieldCheck className="mb-3 text-blue-300" size={20} />
              <h3 className="font-semibold text-white">Role-Based</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Built for admins, faculty, staff, and students.
              </p>
            </Card>

            <Card className="p-5">
              <Sparkles className="mb-3 text-blue-300" size={20} />
              <h3 className="font-semibold text-white">CMS Ready</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Structured for content publishing and approvals.
              </p>
            </Card>

            <Card className="p-5">
              <Users className="mb-3 text-blue-300" size={20} />
              <h3 className="font-semibold text-white">Scalable UX</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Optimized for future backend and DB integrations.
              </p>
            </Card>
          </div>
        </div>

        <Card className="relative overflow-hidden p-8">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-400">Platform Snapshot</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Academic operations with product-grade clarity
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Students</p>
                <p className="mt-2 text-3xl font-semibold text-white">12.8k</p>
                <p className="mt-2 text-xs text-emerald-300">+8.2% growth</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Departments</p>
                <p className="mt-2 text-3xl font-semibold text-white">24</p>
                <p className="mt-2 text-xs text-blue-200">Multi-domain campus</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Courses</p>
                <p className="mt-2 text-3xl font-semibold text-white">186</p>
                <p className="mt-2 text-xs text-slate-300">Running this term</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Modules</p>
                <p className="mt-2 text-3xl font-semibold text-white">14</p>
                <p className="mt-2 text-xs text-slate-300">CMS + admin domains</p>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition hover:text-white"
            >
              View command center <ArrowRight size={16} />
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}