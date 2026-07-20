import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const studentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  department: z.string().min(1, "Department is required"),
  program: z.string().min(1, "Program is required"),
  semester: z.number().min(1).max(8),
});

export const facultySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  department: z.string().min(1, "Department is required"),
  designation: z.string().min(1, "Designation is required"),
  specialization: z.string().min(1, "Specialization is required"),
});

export const courseSchema = z.object({
  code: z.string().min(2, "Course code is required"),
  title: z.string().min(3, "Course title is required"),
  department: z.string().min(1, "Department is required"),
  creditHours: z.number().min(1).max(6),
  instructor: z.string().min(1, "Instructor is required"),
  capacity: z.number().min(1, "Capacity is required"),
});

export const noticeSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Category is required"),
  priority: z.enum(["High", "Medium", "Low"]),
  description: z.string().min(10, "Description is required"),
});

export const eventSchema = z.object({
  title: z.string().min(5, "Title is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  category: z.string().min(1, "Category is required"),
  capacity: z.number().min(1, "Capacity is required"),
  description: z.string().min(10, "Description is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type StudentFormData = z.infer<typeof studentSchema>;
export type FacultyFormData = z.infer<typeof facultySchema>;
export type CourseFormData = z.infer<typeof courseSchema>;
export type NoticeFormData = z.infer<typeof noticeSchema>;
export type EventFormData = z.infer<typeof eventSchema>;