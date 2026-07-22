import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";

const pillars = [
  {
    title: "Institutional Clarity",
    description:
      "Centralized visibility for content, departments, academic workflows, and administrative decisions across the entire university.",
  },
  {
    title: "Scalable Frontend Architecture",
    description:
      "Designed to connect smoothly with future APIs, authentication systems, and database-backed modules at enterprise scale.",
  },
  {
    title: "Executive-Level UX",
    description:
      "Clean information hierarchy, modular components, and product-ready layouts that communicate professionalism and competence.",
  },
];

const capabilities = [
  "Public website content management",
  "Admissions journey and applicant communication",
  "Departmental pages and faculty publishing",
  "Role-based dashboard experiences",
  "Academic notices, events, and announcements",
  "Future CRUD, analytics, and backend integrations",
];

export default function AboutPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="About Campus Nexus"
          title="A modern operating layer for universities."
          description="Campus Nexus is built to unify public communication and internal academic operations under one premium frontend system."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <Card hover key={item.title}>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-white">
            What this platform is prepared to handle
          </h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}