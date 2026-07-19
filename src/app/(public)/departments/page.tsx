import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";

const departments = [
  { name: "Computer Science", head: "Dr. Ayesha Rahman", programs: 8 },
  { name: "Business Administration", head: "Dr. Saad Malik", programs: 6 },
  { name: "Electrical Engineering", head: "Dr. Hina Tariq", programs: 7 },
  { name: "Social Sciences", head: "Dr. Umar Farooq", programs: 5 },
  { name: "Health Sciences", head: "Dr. Sana Khalid", programs: 9 },
  { name: "Architecture & Design", head: "Prof. Daniyal Ahmed", programs: 4 },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Departments"
        title="Structured academic units with clear digital presence."
        description="Each department is modeled to support faculty profiles, course visibility, admissions information, notices, events, and research-led storytelling."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <Card key={department.name}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                {department.programs} Programs
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                {department.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Department Head: {department.head}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Public pages, internal content modules, and academic updates can
                be managed in a scalable CMS-style flow.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}