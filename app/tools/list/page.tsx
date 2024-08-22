import FullListTable from "@/components/full-list-table";
import ToolHeader from "@/components/tool-header";
import { prisma } from "@/lib/prisma";

const fetchData = async () => {
  const fullList = await prisma.food.findMany({
    include: {
      buffs: true,
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
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <ToolHeader toolName="Full List" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <FullListTable list={fullList} searchbar={true} buffTypes={buffTypes} />
      </section>
    </main>
  );
}
