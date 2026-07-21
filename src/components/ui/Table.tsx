import { cn } from "@/lib/utils";

type Column<T> = {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  emptyMessage?: string;
};

export default function Table<T>({
  columns,
  data,
  keyExtractor,
  emptyMessage = "No records found",
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.04]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-400",
                    col.className
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={keyExtractor(item)}
                className="border-b border-white/5 transition hover:bg-white/[0.03]"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn("px-5 py-4 text-sm text-slate-300", col.className)}
                  >
                    {col.render
                      ? col.render(item)
                      : (item as Record<string, unknown>)[col.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}