import Card from "@/components/ui/Card";

const stats = [
  { label: "Active Students", value: "12,840" },
  { label: "Faculty Members", value: "1,120" },
  { label: "Programs Offered", value: "42" },
  { label: "Annual Applications", value: "18,300+" },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <Card hover key={item.label}><p className="text-sm text-slate-400">{item.label}</p><p className="mt-3 text-3xl font-semibold text-white">{item.value}</p></Card>
        ))}
      </div>
    </section>
  );
}
