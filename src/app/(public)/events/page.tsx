import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";

const events = [
  {
    title: "Open House 2026",
    date: "12 September 2026",
    location: "Main Auditorium",
  },
  {
    title: "Research & Innovation Summit",
    date: "22 September 2026",
    location: "Innovation Center",
  },
  {
    title: "Leadership Forum",
    date: "03 October 2026",
    location: "Senate Hall",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="A campus event experience that feels organized and premium."
        description="Event modules are designed for announcements, schedules, registrations, and public university engagement."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                {event.date}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                {event.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{event.location}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Event detail pages can later include agenda, speakers,
                registrations, media, and faculty-specific participation.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}