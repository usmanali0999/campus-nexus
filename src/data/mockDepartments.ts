import type { Department } from "@/types/department";

export const mockDepartments: Department[] = [
  {
    id: 1,
    name: "Computer Science",
    dean: "Dr. Ahmed Raza",
    programs: 8,
    students: 2140,
    description:
      "Focused on software engineering, AI, data systems, and computing research.",
  },
  {
    id: 2,
    name: "Business Administration",
    dean: "Dr. Sarah Khan",
    programs: 6,
    students: 1680,
    description:
      "Developing future leaders in finance, operations, strategy, and entrepreneurship.",
  },
  {
    id: 3,
    name: "Engineering",
    dean: "Dr. Usman Tariq",
    programs: 10,
    students: 2575,
    description:
      "Strong academic and lab-based ecosystem across electrical, civil, and mechanical domains.",
  },
  {
    id: 4,
    name: "Social Sciences",
    dean: "Dr. Hina Latif",
    programs: 5,
    students: 1120,
    description:
      "Cultivating research, policy thinking, and social impact through interdisciplinary study.",
  },
];