export type Notice = {
  id: number;
  title: string;
  category: string;
  date: string;
  priority: "High" | "Medium" | "Low";
  description: string;
};