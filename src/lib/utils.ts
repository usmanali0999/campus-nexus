import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    enrolled: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    completed: "text-blue-300 bg-blue-400/10 border-blue-400/20",
    graduated: "text-blue-300 bg-blue-400/10 border-blue-400/20",
    upcoming: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    "on-leave": "text-amber-300 bg-amber-400/10 border-amber-400/20",
    suspended: "text-red-300 bg-red-400/10 border-red-400/20",
    dropped: "text-red-300 bg-red-400/10 border-red-400/20",
    retired: "text-slate-300 bg-slate-400/10 border-slate-400/20",
    inactive: "text-slate-300 bg-slate-400/10 border-slate-400/20",
  };
  return colors[status] || "text-slate-300 bg-slate-400/10 border-slate-400/20";
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    High: "text-red-300 bg-red-400/10 border-red-400/20",
    Medium: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    Low: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  };
  return colors[priority] || "text-slate-300 bg-slate-400/10 border-slate-400/20";
}