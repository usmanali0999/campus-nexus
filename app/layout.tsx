import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Campus Nexus",
    template: "%s | Campus Nexus",
  },
  description:
    "Enterprise-grade university CMS frontend for managing academic content, admissions, departments, notices, events, and role-based dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          manrope.variable,
          "min-h-screen bg-slate-50 text-slate-900 antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}