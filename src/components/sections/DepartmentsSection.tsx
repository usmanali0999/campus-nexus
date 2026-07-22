import Link from "next/link";
import Card from "@/components/ui/Card";
import { mockDepartments } from "@/data/mockDepartments";

export default function DepartmentsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Academic Structure</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Leading departments powering the institution</h2>
          </div>
          <Link href="/departments" className="text-sm text-blue-200 hover:text-white">View all</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {mockDepartments.slice(0, 3).map((dept) => (
            <Card hover key={dept.id}>
              <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{dept.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div><p className="text-slate-500">Dean</p><p className="mt-1 text-slate-200">{dept.dean}</p></div>
                <div><p className="text-slate-500">Programs</p><p className="mt-1 text-slate-200">{dept.programs}</p></div>
                <div><p className="text-slate-500">Students</p><p className="mt-1 text-slate-200">{dept.students}</p></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
