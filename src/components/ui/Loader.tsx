import { cn } from "@/lib/utils";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

export default function Loader({ size = "md", className }: LoaderProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-blue-500 border-t-transparent",
        sizes[size],
        className
      )}
    />
  );
}

export function PageLoader() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader size="lg" />
        <p className="text-sm text-slate-400">Loading...</p>
      </div>
    </div>
  );
}