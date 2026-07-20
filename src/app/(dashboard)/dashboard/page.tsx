import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { dashboardStats } from "@/constants/dashboardStats";
import { mockEvents } from "@/data/mockEvents";
import { mockNotices } from "@/data/mockNotices";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Executive Overview"
        title="Institutional performance at a glance"
        description="Track academic operations, content activity, fee visibility, and upcoming campus actions from one command layer."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-300">{item.change}</p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-200">
                  <Icon size={22} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h3 className="text-xl font-semibold text-white">Recent Notices</h3>
          <div className="mt-6 space-y-4">
            {mockNotices.map((notice) => (
              <div
                key={notice.id}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-slate-300">
                    {notice.category}
                  </span>
                  <span className="text-slate-500">{notice.date}</span>
                </div>
                <h4 className="mt-3 font-semibold text-white">{notice.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {notice.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-white">Upcoming Events</h3>
          <div className="mt-6 space-y-4">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>
                <h4 className="mt-3 font-semibold text-white">{event.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {event.description}
                </p>
                <p className="mt-3 text-sm text-slate-300">Venue: {event.venue}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Priority Area</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Admissions Pipeline</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Applicant review workflows, merit automation, and communication sequencing.
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Content Health</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Public CMS Ready</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Notices, events, departments, and landing content are structured for dynamic publishing.
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Platform Direction</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Backend Integration Next</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Next phase includes APIs, auth, persistence, and domain-level CRUD modules.
          </p>
        </Card>
      </div>
    </div>
  );
}