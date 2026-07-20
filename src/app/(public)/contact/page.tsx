import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with the university through a cleaner digital experience."
        description="This page is prepared for support channels, campus office details, departmental contacts, and future inquiry submissions."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h3 className="text-2xl font-semibold text-slate-950">
              Campus Information
            </h3>
            <div className="mt-6 space-y-5 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-950">Address</p>
                <p className="mt-1">Main University Road, Knowledge District</p>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Phone</p>
                <p className="mt-1">+92 300 0000000</p>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Email</p>
                <p className="mt-1">info@campusnexus.edu</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold text-slate-950">
              Send an Inquiry
            </h3>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-500"