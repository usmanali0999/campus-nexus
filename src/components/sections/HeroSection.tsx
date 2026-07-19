import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const highlights = [
  "Unified public website and internal portal experience",
  "Designed for scalable CMS and future backend integration",
  "Role-based architecture for admin, faculty, and students",
];

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-24">
      <div className="max-w-3xl">
        <Badge>Enterprise University Platform</Badge>

        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
          The digital operating system for modern universities.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Campus Nexus brings together academic content, admissions workflows,
          departmental publishing, notices, events, and dashboard experiences
          into one scalable frontend architecture.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/departments" variant="secondary" size="lg">
            Explore Modules
          </Button>
          <Button href="/dashboard" variant="outline" size="lg">
            Preview Dashboard
          </Button>
        </div>

        <div className="mt-10 space-y-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-600" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        <Card className="bg-slate-950 text-white">
          <p className="text-sm uppercase tracking-[0.16em] text-cyan-300">
            Active Ecosystem
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-semibold">24+</p>
              <p className="mt-2 text-sm text-slate-300">Academic departments</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">18k+</p>
              <p className="mt-2 text-sm text-slate-300">Enrolled students</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">1.2k</p>
              <p className="mt-2 text-sm text-slate-300">Faculty members</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">99.9%</p>
              <p className="mt-2 text-sm text-slate-300">Portal availability</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Public CMS
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">
              SEO-friendly academic presence
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Department pages, announcements, admissions content, events, and
              branded institutional storytelling.
            </p>
          </Card>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Admin Portal
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">
              Operational control at scale
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dashboard-driven management for students, faculty, notices,
              content publishing, and university operations.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}