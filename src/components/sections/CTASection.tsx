import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function CTASection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <Card className="p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Platform Ready
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Start with a premium frontend shell, scale into full university operations.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                Campus Nexus is structured to evolve into a complete CMS, admin
                portal, admissions engine, and academic management system.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className={buttonStyles({ variant: "primary", size: "lg" })}>
                Open Dashboard
              </Link>
              <Link href="/contact" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                Contact Admin Office
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}