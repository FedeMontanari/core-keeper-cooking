import { prisma } from "@/lib/prisma";
import DashboardTable from "../_components/dashboard-table";

export default async function FoodDashboardPage() {
  const data = await prisma.food.findMany();
  return <DashboardTable data={data} name="Food" />;
}
