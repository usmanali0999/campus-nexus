import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const departments = [
  "Computer Science",
  "Business Administration",
  "Electrical Engineering",
  "Social Sciences",
  "Health Sciences",
  "Architecture & Design",
];

export default function DepartmentsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-2xl">
        <Badge>Academic Structure</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Departmental experiences designed for clarity and scale.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Each department can have its own content system, leadership profile,
          courses, notices, research highlights, and admission tracks.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department, index) => (
          <Card key={department}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Department {index + 1}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              {department}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Structured for program listings, faculty profiles, research
              updates, admission routes, and public academic visibility.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}