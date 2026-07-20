import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          The page you’re looking for doesn’t exist.
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
          The route may have been moved, renamed, or is not yet available in the current build.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/" className={buttonStyles({ variant: "primary", size: "lg" })}>
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}