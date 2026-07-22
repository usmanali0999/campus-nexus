import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Onboarding
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Create account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Register a new profile for dashboard access.
        </p>
      </div>
      <RegisterForm />
      <p className="text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-200 hover:text-white">Sign in</Link>
      </p>
    </div>
  );
}