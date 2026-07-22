"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";

const data = [
  { name: "Computer Science", value: 2140 },
  { name: "Business Admin", value: 1680 },
  { name: "Engineering", value: 2575 },
  { name: "Social Sciences", value: 1120 },
  { name: "Medical Sciences", value: 890 },
  { name: "Law", value: 620 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981", "#ef4444"];

export default function DepartmentChart() {
  return (
    <Card>
      <h3 className="mb-6 text-lg font-semibold text-white">Students by Department</h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "13px" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[index] }} />
            {item.name}
          </div>
        ))}
      </div>
    </Card>
  );
}