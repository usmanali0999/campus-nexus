import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import PublicWrapper from "@/components/layout/PublicWrapper";
import { mockDepartments } from "@/data/mockDepartments";

export default function DepartmentsPage() {
  return (
    <PublicWrapper>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <PageHeader eyebrow="Academic Departments" title="Explore the university academic ecosystem." description="Each department is structured to showcase leadership, programs, student volumes, and institutional strengths." />
          <div className="grid gap-6 lg:grid-cols-2">
            {mockDepartments.map((dept) => (
              <Card hover key={dept.id}>
                <h3 className="text-2xl font-semibold text-white">{dept.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{dept.description}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-4">
                  <div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Dean</p><p className="mt-2 text-sm text-slate-200">{dept.dean}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Programs</p><p className="mt-2 text-sm text-slate-200">{dept.programs}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Students</p><p className="mt-2 text-sm text-slate-200">{dept.students}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Faculty</p><p className="mt-2 text-sm text-slate-200">{dept.faculty}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicWrapper>
  );
}
