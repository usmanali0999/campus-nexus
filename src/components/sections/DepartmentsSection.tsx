import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockDepartments } from "@/data/mockDepartments";
import Card from "@/components/ui/Card";

export default function DepartmentsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Academic Structure
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Leading departments powering the institution
            </h2>
          </div>

          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white"
          >
            View all departments <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {mockDepartments.slice(0, 3).map((department) => (
            <Card key={department.id}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{department.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {department.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Dean</p>
                    <p className="mt-1 text-slate-200">{department.dean}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Programs</p>
                    <p className="mt-1 text-slate-200">{department.programs}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Students</p>
                    <p className="mt-1 text-slate-200">{department.students}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}