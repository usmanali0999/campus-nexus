import Link from "next/link";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { buttonStyles } from "@/components/ui/Button";

const steps = [
  "Create your applicant profile",
  "Upload academic documents",
  "Choose program preferences",
  "Appear for interview or test if required",
  "Track merit and admission decision",
];

const windows = [
  { title: "Undergraduate", period: "01 Aug 2026 - 30 Sep 2026" },
  { title: "Graduate", period: "15 Aug 2026 - 10 Oct 2026" },
  { title: "Scholarship Review", period: "05 Sep 2026 - 20 Oct 2026" },
];

export default function AdmissionsPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Admissions"
          title="A structured application journey for future students."
          description="From discovery to enrollment, the admissions experience is organized around clarity, deadlines, and applicant guidance."
          action={
            <Link href="/register" className={buttonStyles({ variant: "primary" })}>
              Start Application
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h3 className="text-xl font-semibold text-white">Application Process</h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            {windows.map((item) => (
              <Card key={item.title}>
                <p className="text-sm text-slate-400">{item.title}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.period}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Submission windows, screening updates, and communication flows
                  can later be connected with backend admissions services.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}