import FullListTable from "@/components/full-list-table";
import ToolHeader from "@/components/tool-header";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const fetchData = async () => {
  const fullList = await prisma.food.findMany({
    include: {
      buffs: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  const buffTypes = await prisma.buffType.findMany();
  return {
    fullList,
    buffTypes,
  };
};

export default async function FullList() {
  const { fullList, buffTypes } = await fetchData();

  return (
    <main className="w-full flex items-center justify-start flex-col gap-5 pb-8">
      <ToolHeader toolName="Full List" />
      <section className="bg-infocard infocard-fancy mt-24">
        <FullListTable list={fullList} searchbar={true} buffTypes={buffTypes} />
      </section>
    </main>
  );
}
