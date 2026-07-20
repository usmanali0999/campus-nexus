import type { Department } from "@/types/department";

export const mockDepartments: Department[] = [
  {
    id: 1,
    name: "Computer Science",
    dean: "Dr. Ahmed Raza",
    programs: 8,
    students: 2140,
    faculty: 32,
    established: "1998",
    description:
      "Focused on software engineering, artificial intelligence, data systems, cybersecurity, and advanced computing research across undergraduate and graduate programs.",
  },
  {
    id: 2,
    name: "Business Administration",
    dean: "Dr. Sarah Khan",
    programs: 6,
    students: 1680,
    faculty: 24,
    established: "2002",
    description:
      "Developing future leaders in finance, operations, strategic management, marketing, and entrepreneurship with industry-partnered learning.",
  },
  {
    id: 3,
    name: "Engineering",
    dean: "Dr. Usman Tariq",
    programs: 10,
    students: 2575,
    faculty: 45,
    established: "1995",
    description:
      "Strong academic and lab-based ecosystem spanning electrical, civil, mechanical, and mechatronics engineering with research excellence.",
  },
  {
    id: 4,
    name: "Social Sciences",
    dean: "Dr. Hina Latif",
    programs: 5,
    students: 1120,
    faculty: 18,
    established: "2008",
    description:
      "Cultivating research, policy thinking, and social impact through interdisciplinary study in psychology, sociology, and international relations.",
  },
  {
    id: 5,
    name: "Medical Sciences",
    dean: "Dr. Farhan Javed",
    programs: 4,
    students: 890,
    faculty: 28,
    established: "2010",
    description:
      "Comprehensive medical education with clinical rotations, research opportunities, and community health initiatives across multiple specializations.",
  },
  {
    id: 6,
    name: "Law",
    dean: "Dr. Amna Rafiq",
    programs: 3,
    students: 620,
    faculty: 14,
    established: "2012",
    description:
      "Rigorous legal education combining constitutional law, corporate governance, human rights, and moot court practice for aspiring legal professionals.",
  },
];