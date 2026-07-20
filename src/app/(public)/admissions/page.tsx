import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";

const steps = [
  "Create applicant profile",
  "Select faculty and program preferences",
  "Upload academic documents",
  "Track application review and updates",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="A cleaner admissions journey for applicants and administrators."
        description="The frontend is prepared for application flows, document status, deadlines, notices, and role-based admission management."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h3 className="text-2xl font-semibold text-slate-950">
              Admission Process
            </h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold text-slate-950">
              Upcoming Intake
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Applications Open
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-950">
                  01 August 2026
                </p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Deadline
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-950">
                  30 September 2026
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              In the next phase, this module will connect to backend APIs for
              applications, forms, status tracking, eligibility, and payment flow.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}