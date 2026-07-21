import { BookOpen, Building2, CreditCard, GraduationCap, Users } from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Students",
    value: "12,840",
    change: "+8.2% from last semester",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Faculty Members",
    value: "1,120",
    change: "+24 new hires this year",
    trend: "up" as const,
    icon: GraduationCap,
  },
  {
    title: "Courses Running",
    value: "186",
    change: "+14 added this term",
    trend: "up" as const,
    icon: BookOpen,
  },
  {
    title: "Fee Collection",
    value: "$2.4M",
    change: "94% cleared this cycle",
    trend: "up" as const,
    icon: CreditCard,
  },
  {
    title: "Departments",
    value: "24",
    change: "6 core + 18 specialized",
    trend: "neutral" as const,
    icon: Building2,
  },
];