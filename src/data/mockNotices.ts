import type { Notice } from "@/types/notice";

export const mockNotices: Notice[] = [
  { id: 1, title: "Fall 2026 semester registration deadline extended", category: "Academic", date: "10 Aug 2026", priority: "High", author: "Registrar Office", description: "Students may now complete registration until 15 Aug 2026 through the academic portal." },
  { id: 2, title: "Merit scholarship interviews schedule published", category: "Admissions", date: "08 Aug 2026", priority: "Medium", author: "Financial Aid Office", description: "Interview slots and reporting times are now available for shortlisted candidates." },
  { id: 3, title: "Library digital access upgraded with new databases", category: "Library", date: "05 Aug 2026", priority: "Low", author: "Central Library", description: "Expanded access to journals, e-books, and external databases has been provisioned." },
  { id: 4, title: "Campus maintenance scheduled for Block C", category: "Administration", date: "03 Aug 2026", priority: "Medium", author: "Facilities Management", description: "Routine maintenance and safety inspections will be conducted from August 5-8." },
  { id: 5, title: "Final year project submission portal now open", category: "Academic", date: "01 Aug 2026", priority: "High", author: "Department Coordinators", description: "All final year students must submit project proposals through the online portal by September 1." },
];
