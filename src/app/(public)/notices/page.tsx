import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const notices = [
  {
    title: "Midterm Examination Schedule Released",
    type: "Academic",
    date: "18 Jul 2026",
  },
  {
    title: "Scholarship Application Window Extended",
    type: "Financial Aid",
    date: "15 Jul 2026",
  },
  {
    title: "Orientation Week Guidelines for New Intake",
    type: "Student Affairs",
    date: "12 Jul 2026",
  },
  {
    title: "Library Digital Access Upgrade Announcement",
    type: "Operations",
    date: "09 Jul 2026",
  },
];

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notices"
        title="Institution-wide announcements with structured visibility."
        description="Notices are designed to be filterable, publishable, and easy to maintain across academic, administrative, and student affairs contexts."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5">
          {notices.map((notice) => (
            <Card
              key={notice.title}
              className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <Badge>{notice.type}</Badge>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {notice.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-slate-500">{notice.date}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}