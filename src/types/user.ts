export type UserRole = "admin" | "faculty" | "student" | "staff";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  phone?: string;
  status: "active" | "inactive" | "suspended";
  joinedAt: string;
};