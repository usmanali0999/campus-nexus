import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)] lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Ready for expansion
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start with a premium frontend today, plug backend and database next.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The architecture is ready for future integration with authentication,
              APIs, role-based permissions, content management, and enterprise data flows.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/dashboard" variant="secondary" size="lg">
              Open Dashboard
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
              Contact Office
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}