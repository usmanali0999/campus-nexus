import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { mockDepartments } from "@/data/mockDepartments";

export default function DepartmentsPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Academic Departments"
          title="Explore the university's academic ecosystem."
          description="Each department is structured to showcase leadership, programs, student volumes, and institutional strengths."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {mockDepartments.map((dept) => (
            <Card hover key={dept.id}>
              <h3 className="text-2xl font-semibold text-white">{dept.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{dept.description}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-4">
                {[
                  { label: "Dean", value: dept.dean },
                  { label: "Programs", value: dept.programs },
                  { label: "Students", value: dept.students },
                  { label: "Faculty", value: dept.faculty },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}