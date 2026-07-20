import { BookOpen, Building2, CreditCard, Users } from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Students",
    value: "12,840",
    change: "+8.2%",
    icon: Users,
  },
  {
    title: "Departments",
    value: "24",
    change: "+2 new",
    icon: Building2,
  },
  {
    title: "Courses Running",
    value: "186",
    change: "+14 this term",
    icon: BookOpen,
  },
  {
    title: "Fee Collection",
    value: "$2.4M",
    change: "94% cleared",
    icon: CreditCard,
  },
];