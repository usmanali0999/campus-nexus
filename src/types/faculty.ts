export type Faculty = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: "Professor" | "Associate Professor" | "Assistant Professor" | "Lecturer" | "Lab Instructor";
  specialization: string;
  experience: number;
  status: "active" | "on-leave" | "retired";
  joinedAt: string;
  avatar?: string;
};