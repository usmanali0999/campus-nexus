import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const events = [
  {
    date: "12 Sep",
    title: "Admissions Open House",
    description:
      "A campus-wide discovery event for prospective students and parents.",
  },
  {
    date: "22 Sep",
    title: "Research & Innovation Summit",
    description:
      "Cross-faculty collaboration sessions with researchers and industry leads.",
  },
  {
    date: "03 Oct",
    title: "Leadership Forum",
    description:
      "Strategic academic and operational leadership discussions for institutional growth.",
  },
];

export default function EventsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-2xl">
        <Badge>Campus Life</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Events that power visibility, engagement, and community.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.title}>
            <div className="flex items-center justify-between">
              <span className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                {event.date}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Upcoming
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-slate-950">
              {event.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {event.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}