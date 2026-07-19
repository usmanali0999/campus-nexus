import Badge from "@/components/ui/Badge;

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-20">
      <div className="max-w-3xl">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}