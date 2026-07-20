import type { Notice } from "@/types/notice";

export const mockNotices: Notice[] = [
  {
    id: 1,
    title: "Fall 2026 semester registration deadline extended",
    category: "Academic",
    date: "10 Aug 2026",
    priority: "High",
    description:
      "Students may now complete registration until 15 Aug 2026 through the academic portal.",
  },
  {
    id: 2,
    title: "Merit scholarship interviews schedule published",
    category: "Admissions",
    date: "08 Aug 2026",
    priority: "Medium",
    description:
      "Interview slots and reporting times are now available for shortlisted candidates.",
  },
  {
    id: 3,
    title: "Library digital access upgraded for all departments",
    category: "Library",
    date: "05 Aug 2026",
    priority: "Low",
    description:
      "Expanded access to journals, e-books, and external databases has been provisioned.",
  },
];