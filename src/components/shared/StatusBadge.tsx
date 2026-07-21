import { cn, getStatusColor } from "@/lib/utils";

type StatusBadgeProps = {
  status: string;
  className?: string;
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium capitalize",
        getStatusColor(status),
        className
      )}
    >
      {status}
    </span>
  );
}