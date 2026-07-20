export type Student = {
  id: string;
  rollNumber: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  program: string;
  semester: number;
  cgpa: number;
  status: "enrolled" | "graduated" | "suspended" | "dropped";
  enrolledAt: string;
  avatar?: string;
};