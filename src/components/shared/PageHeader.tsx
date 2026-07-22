import type { ReactNode } from "react";

type PageHeaderProps = { eyebrow?: string; title: string; description?: string; action?: ReactNode; };

export default function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow && <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{eyebrow}</span>}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h1>
          {description && <p className="text-sm leading-7 text-slate-300 md:text-base">{description}</p>}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
