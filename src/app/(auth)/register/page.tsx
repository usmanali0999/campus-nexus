import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

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

      <form className="space-y-4">
        <Input label="Full Name" placeholder="Enter full name" />
        <Input label="Email Address" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="Create password" />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>

      <p className="text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-200 hover:text-white">
          Sign in
        </Link>
      </p>
    </div>
  );
}