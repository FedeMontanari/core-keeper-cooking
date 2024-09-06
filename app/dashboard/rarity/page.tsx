import { prisma } from "@/lib/prisma";
import DashboardTable from "../_components/dashboard-table";

export default async function RarityDashboardPage() {
  const data = await prisma.rarity.findMany();
  return <DashboardTable data={data} name="Rarity" />;
}
