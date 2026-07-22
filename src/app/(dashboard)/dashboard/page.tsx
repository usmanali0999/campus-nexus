import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { dashboardStats } from "@/constants/dashboardStats";
import { mockNotices } from "@/data/mockNotices";
import { mockEvents } from "@/data/mockEvents";
import EnrollmentChart from "@/components/charts/EnrollmentChart";
import DepartmentChart from "@/components/charts/DepartmentChart";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Executive Overview"
        title="Institutional performance at a glance"
        description="Track academic operations, content activity, fee visibility, and upcoming campus actions from one command layer."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <Card hover key={item.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{item.value}</h3>
                  <p className="mt-2 text-xs text-emerald-300">{item.change}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-200">
                  <Icon size={22} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <EnrollmentChart />
        <DepartmentChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h3 className="text-xl font-semibold text-white">Recent Notices</h3>
          <div className="mt-6 space-y-4">
            {mockNotices.slice(0, 3).map((notice) => (
              <div key={notice.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-slate-300">{notice.category}</span>
                  <span className="text-slate-500">{notice.date}</span>
                </div>
                <h4 className="mt-3 font-semibold text-white">{notice.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{notice.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-white">Upcoming Events</h3>
          <div className="mt-6 space-y-4">
            {mockEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{event.category}</span>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>
                <h4 className="mt-3 font-semibold text-white">{event.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{event.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}