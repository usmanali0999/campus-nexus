import Link from "next/link";
import Card from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Enterprise University CMS</span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">One unified frontend for your universitys public presence and internal operations.</h1>
        <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">Campus Nexus centralizes admissions, departments, notices, events, academic content, and role-based dashboards in one scalable product shell.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/dashboard" className={buttonStyles({ variant: "primary", size: "lg" })}>Launch Dashboard</Link>
          <Link href="/admissions" className={buttonStyles({ variant: "secondary", size: "lg" })}>Explore Admissions</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          <Card hover className="p-5"><p className="text-sm text-slate-400">Students</p><p className="mt-2 text-3xl font-semibold text-white">12.8k</p></Card>
          <Card hover className="p-5"><p className="text-sm text-slate-400">Departments</p><p className="mt-2 text-3xl font-semibold text-white">24</p></Card>
          <Card hover className="p-5"><p className="text-sm text-slate-400">Courses</p><p className="mt-2 text-3xl font-semibold text-white">186</p></Card>
          <Card hover className="p-5"><p className="text-sm text-slate-400">Faculty</p><p className="mt-2 text-3xl font-semibold text-white">1.1k</p></Card>
        </div>
      </div>
    </section>
  );
}
