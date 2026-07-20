import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import { mockNotices } from "@/data/mockNotices";

export default function NoticesPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Official Notices"
          title="Institutional updates, circulars, and announcements."
          description="A central notice stream for academic, administrative, and student-facing communication."
        />

        <div className="grid gap-6">
          {mockNotices.map((notice) => (
            <Card key={notice.id}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                      {notice.category}
                    </span>
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-blue-200">
                      {notice.priority} Priority
                    </span>
                    <span className="text-slate-500">{notice.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">{notice.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">
                    {notice.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}