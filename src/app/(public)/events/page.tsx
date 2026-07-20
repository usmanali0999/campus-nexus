import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { mockEvents } from "@/data/mockEvents";

export default function EventsPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Events"
          title="Discover what’s happening across campus."
          description="A dedicated events experience for academic, research, admissions, and student engagement initiatives."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <Card key={event.id}>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {event.description}
                  </p>
                </div>

                <p className="text-sm text-slate-300">Venue: {event.venue}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}