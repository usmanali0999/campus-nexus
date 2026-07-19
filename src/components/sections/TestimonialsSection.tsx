import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const testimonials = [
  {
    name: "Dean Academic Affairs",
    quote:
      "Campus Nexus gives us a strong digital foundation for both academic communication and operational visibility.",
  },
  {
    name: "Registrar Office",
    quote:
      "The structure is practical, scalable, and aligned with real institutional workflows across departments.",
  },
  {
    name: "Technology Lead",
    quote:
      "This frontend architecture is future-ready for backend APIs, role-based access, and content governance.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-2xl">
        <Badge>Institutional Confidence</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Built to feel like a serious product, not a student demo.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}