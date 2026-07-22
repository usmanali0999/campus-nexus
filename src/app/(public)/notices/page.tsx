import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";
import Badge from "@/components/ui/Badge";
import { mockNotices } from "@/data/mockNotices";
import { getPriorityColor } from "@/lib/utils";

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
            <Card hover key={notice.id}>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <Badge variant="info">{notice.category}</Badge>
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                    {notice.priority} Priority
                  </span>
                  <span className="text-slate-500">{notice.date}</span>
                  <span className="text-slate-500">by {notice.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{notice.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{notice.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}