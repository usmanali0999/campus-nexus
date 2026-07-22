import Card from "@/components/ui/Card";

const items = [
  { name: "Dr. Farhan Javed", role: "Dean, Medical Sciences", quote: "Campus Nexus has transformed how we communicate across departments." },
  { name: "Sana Tariq", role: "Student, BBA Finance", quote: "Everything is in one place. The interface is clean and easy to navigate." },
  { name: "Prof. Kamran Shah", role: "Faculty, Computer Science", quote: "Managing courses and attendance has never been this streamlined." },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">What the campus community is saying</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Card hover key={item.name}>
              <p className="text-sm leading-7 text-slate-300">{item.quote}</p>
              <div className="mt-6">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
