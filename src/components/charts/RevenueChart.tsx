"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";

const data = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 320000 },
  { month: "Mar", revenue: 450000 },
  { month: "Apr", revenue: 280000 },
  { month: "May", revenue: 520000 },
  { month: "Jun", revenue: 380000 },
  { month: "Jul", revenue: 290000 },
  { month: "Aug", revenue: 640000 },
];

export default function RevenueChart() {
  return (
    <Card>
      <h3 className="mb-6 text-lg font-semibold text-white">Fee Revenue</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "13px" }} />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}