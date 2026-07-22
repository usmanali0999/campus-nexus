"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";

const data = [
  { dept: "CS", rate: 92 },
  { dept: "BBA", rate: 87 },
  { dept: "ENG", rate: 91 },
  { dept: "SS", rate: 85 },
  { dept: "MED", rate: 94 },
  { dept: "LAW", rate: 88 },
];

export default function AttendanceChart() {
  return (
    <Card>
      <h3 className="mb-6 text-lg font-semibold text-white">Attendance by Department</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="dept" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} domain={[70, 100]} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "13px" }} />
          <Bar dataKey="rate" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}