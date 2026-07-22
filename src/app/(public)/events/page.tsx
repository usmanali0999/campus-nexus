import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/shared/PageHeader";
import { mockEvents } from "@/data/mockEvents";

export default function EventsPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Events"
          title="Discover what's happening across campus."
          description="A dedicated events experience for academic, research, admissions, and student engagement initiatives."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {mockEvents.map((event) => (
            <Card hover key={event.id}>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="info">{event.category}</Badge>
                <span className="text-xs text-slate-500">{event.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{event.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Venue</p>
                  <p className="mt-1 text-slate-300">{event.venue}</p>
                </div>
                <div>
                  <p className="text-slate-500">Time</p>
                  <p className="mt-1 text-slate-300">{event.time}</p>
                </div>
                <div>
                  <p className="text-slate-500">Registered</p>
                  <p className="mt-1 text-slate-300">{event.registered}/{event.capacity}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}