import Card from "@/components/ui/Card";

const stats = [
  { value: "120+", label: "Programs managed across all faculties" },
  { value: "450+", label: "Annual notices, updates, and circulars" },
  { value: "80+", label: "University events published per academic year" },
  { value: "15+", label: "Core admin workflows prepared for expansion" },
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-4xl font-semibold tracking-tight text-slate-950">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}