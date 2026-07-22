import Link from "next/link";
import Card from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <Card className="p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Platform Ready</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Start with a premium frontend shell, scale into full operations.</h2>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard" className={buttonStyles({ variant: "primary", size: "lg" })}>Open Dashboard</Link>
              <Link href="/contact" className={buttonStyles({ variant: "secondary", size: "lg" })}>Contact Us</Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
