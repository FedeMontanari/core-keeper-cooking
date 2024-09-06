import { prisma } from "@/lib/prisma";
import DashboardTable from "../_components/dashboard-table";

export default async function BuffDashboardPage() {
  const values = await prisma.buffType.findMany();
  return <DashboardTable data={values} name="Buffs" />;
}
