import Link from "next/link";
import Card from "@/components/ui/Card";
import { mockEvents } from "@/data/mockEvents";

export default function EventsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Campus Life</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Upcoming events</h2>
          </div>
          <Link href="/events" className="text-sm text-blue-200 hover:text-white">Explore events</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {mockEvents.slice(0, 3).map((event) => (
            <Card hover key={event.id}>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{event.category}</span>
                <span className="text-xs text-slate-500">{event.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{event.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
