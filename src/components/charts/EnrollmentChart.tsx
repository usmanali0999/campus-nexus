"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";

const data = [
  { month: "Jan", students: 11200 },
  { month: "Feb", students: 11450 },
  { month: "Mar", students: 11800 },
  { month: "Apr", students: 12100 },
  { month: "May", students: 12300 },
  { month: "Jun", students: 12500 },
  { month: "Jul", students: 12650 },
  { month: "Aug", students: 12840 },
];

export default function EnrollmentChart() {
  return (
    <Card>
      <h3 className="mb-6 text-lg font-semibold text-white">Enrollment Trend</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="enrollGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "13px" }} />
          <Area type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} fill="url(#enrollGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}