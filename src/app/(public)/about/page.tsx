import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";

const pillars = [
  {
    title: "Academic Excellence",
    text: "A digital foundation that reflects research quality, teaching standards, and institutional trust.",
  },
  {
    title: "Operational Clarity",
    text: "Organized information architecture for departments, notices, admissions, and student-facing content.",
  },
  {
    title: "Future-Ready Scale",
    text: "Prepared for backend APIs, data workflows, role-based permissions, and content governance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Campus Nexus"
        title="A modern university platform designed like a real product."
        description="Campus Nexus is built to present a university as a connected digital institution, combining public communication, academic identity, and internal operational visibility."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-2xl font-semibold text-slate-950">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {pillar.text}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}