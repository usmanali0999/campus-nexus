import type { Notice } from "@/types/notice";

export const mockNotices: Notice[] = [
  {
    id: 1,
    title: "Fall 2026 semester registration deadline extended to August 15",
    category: "Academic",
    date: "10 Aug 2026",
    priority: "High",
    author: "Registrar Office",
    description:
      "Students may now complete registration until 15 Aug 2026 through the academic portal. Late registrations will incur additional processing fees.",
  },
  {
    id: 2,
    title: "Merit scholarship interviews schedule published for all departments",
    category: "Admissions",
    date: "08 Aug 2026",
    priority: "Medium",
    author: "Financial Aid Office",
    description:
      "Interview slots and reporting times are now available for shortlisted candidates. Students must bring original documents and CNIC for verification.",
  },
  {
    id: 3,
    title: "Library digital access upgraded with 12 new journal databases",
    category: "Library",
    date: "05 Aug 2026",
    priority: "Low",
    author: "Central Library",
    description:
      "Expanded access to international journals, e-books, and external research databases has been provisioned for all enrolled students and faculty.",
  },
  {
    id: 4,
    title: "Campus maintenance scheduled for Block C and Engineering Labs",
    category: "Administration",
    date: "03 Aug 2026",
    priority: "Medium",
    author: "Facilities Management",
    description:
      "Routine maintenance and safety inspections will be conducted from August 5-8. Classes in affected blocks will be relocated to Block A temporarily.",
  },
  {
    id: 5,
    title: "Final year project submission portal now open for Fall 2026",
    category: "Academic",
    date: "01 Aug 2026",
    priority: "High",
    author: "Department Coordinators",
    description:
      "All final year students must submit project proposals through the online portal by September 1. Late submissions will not be entertained under any circumstances.",
  },
];