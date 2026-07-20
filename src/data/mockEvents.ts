import type { Event } from "@/types/event";

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Spring Research Symposium 2026",
    date: "12 Aug 2026",
    time: "09:00 AM - 05:00 PM",
    venue: "Main Auditorium, Academic Block A",
    category: "Research",
    organizer: "Office of Research & Innovation",
    capacity: 500,
    registered: 420,
    description:
      "A university-wide showcase of final year research projects, graduate theses, and faculty-led innovation across all departments.",
  },
  {
    id: 2,
    title: "Admissions Open House — Fall 2026",
    date: "18 Aug 2026",
    time: "10:00 AM - 03:00 PM",
    venue: "Admissions Block & Campus Grounds",
    category: "Admissions",
    organizer: "Admissions & Outreach Office",
    capacity: 1000,
    registered: 780,
    description:
      "Campus tours, scholarship briefings, faculty meetups, program showcases, and live applicant guidance sessions for prospective students.",
  },
  {
    id: 3,
    title: "Industry Connect Summit",
    date: "25 Aug 2026",
    time: "11:00 AM - 04:00 PM",
    venue: "Innovation Hub, Block D",
    category: "Careers",
    organizer: "Career Development Center",
    capacity: 300,
    registered: 265,
    description:
      "Collaborative sessions with recruiters, startup founders, hiring partners, and alumni currently leading in technology, finance, and consulting sectors.",
  },
  {
    id: 4,
    title: "Inter-Department Sports Gala",
    date: "02 Sep 2026",
    time: "08:00 AM - 06:00 PM",
    venue: "University Sports Complex",
    category: "Sports",
    organizer: "Student Affairs & Sports Committee",
    capacity: 2000,
    registered: 1450,
    description:
      "Annual inter-department sports competition featuring cricket, football, basketball, badminton, and athletics with trophies and merit certificates.",
  },
];