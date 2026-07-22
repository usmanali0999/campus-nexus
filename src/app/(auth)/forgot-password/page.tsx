import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Password Recovery
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Reset your password</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Enter your registered email and we&apos;ll send a reset link.
        </p>
      </div>
      <form className="space-y-4">
        <Input label="Email Address" type="email" placeholder="you@example.com" />
        <Button type="submit" className="w-full">Send Reset Link</Button>
      </form>
      <Link href="/login" className="inline-block text-sm text-blue-200 hover:text-white">
        Back to login
      </Link>
    </div>
  );
}