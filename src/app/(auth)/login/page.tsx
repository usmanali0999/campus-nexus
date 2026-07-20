import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Secure Access
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Sign in to access the Campus Nexus dashboard.
        </p>
      </div>

      <form className="space-y-4">
        <Input
          label="University Email"
          type="email"
          placeholder="admin@campusnexus.edu"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="flex items-center justify-between text-sm">
        <Link href="/forgot-password" className="text-slate-400 hover:text-white">
          Forgot password?
        </Link>
        <Link href="/register" className="text-blue-200 hover:text-white">
          Create account
        </Link>
      </div>
    </div>
  );
}