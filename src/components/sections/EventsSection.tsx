import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";
import Card from "@/components/ui/Card";

export default function EventsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Campus Life
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Upcoming events and institutional moments
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white"
          >
            Explore events <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <Card key={event.id}>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-400">{event.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
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