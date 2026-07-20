export type Course = {
  id: string;
  code: string;
  title: string;
  department: string;
  creditHours: number;
  instructor: string;
  semester: string;
  capacity: number;
  enrolled: number;
  status: "active" | "completed" | "upcoming";
};