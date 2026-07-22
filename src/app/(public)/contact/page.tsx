import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import PageHeader from "@/components/shared/PageHeader";

const contacts = [
  { title: "General Office", value: "admin@campusnexus.edu", detail: "General communication and public information." },
  { title: "Admissions Desk", value: "admissions@campusnexus.edu", detail: "Queries related to applications, eligibility, and merit." },
  { title: "Academic Affairs", value: "academics@campusnexus.edu", detail: "Program structure, departments, and academic policy support." },
  { title: "IT & Platform", value: "support@campusnexus.edu", detail: "Portal access, systems support, and operational assistance." },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageHeader
          eyebrow="Contact"
          title="Reach the right office with confidence."
          description="Campus Nexus supports clear communication channels for applicants, students, faculty, and administrative stakeholders."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {contacts.map((item) => (
              <Card hover key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-blue-200">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
              </Card>
            ))}
          </div>

          <Card>
            <h3 className="text-xl font-semibold text-white">Send a message</h3>
            <form className="mt-6 space-y-4">
              <Input label="Full Name" placeholder="Enter your full name" />
              <Input label="Email Address" type="email" placeholder="you@example.com" />
              <Input label="Subject" placeholder="How can we help?" />
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/60"
                  placeholder="Write your message here..."
                />
              </div>
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}