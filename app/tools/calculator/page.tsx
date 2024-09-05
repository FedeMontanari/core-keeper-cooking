import ToolHeader from "@/components/tool-header";
import { prisma } from "@/lib/prisma";
import { env } from "process";
import React from "react";
import IngredientsForm from "./_components/ingredients-form";

const ENV = env.NODE_ENV;

const fetchData = async () => {
  const fullList = await prisma.food.findMany({
    include: {
      buffs: {
        include: {
          type: true,
        },
      },
      rarity: true,
    },
  });
  const buffTypes = await prisma.buffType.findMany();
  return {
    fullList,
    buffTypes,
  };
};

export default async function Calculator() {
  const { fullList, buffTypes } = await fetchData();

  if (ENV !== "development") {
    return (
      <main className="w-full h-full flex items-center justify-start flex-col gap-5">
        <ToolHeader toolName="Calculator" />
        <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
          <div className="flex justify-center items-center flex-col">
            <p className="text-xl border-b font-bold">Under Construction!</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <ToolHeader toolName="Calculator" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl border-b font-bold">How to use:</p>
          <p className="py-3">
            Select two ingredients from the dropdown list and get the finished
            dish stat values!
          </p>
          <IngredientsForm ingredients={fullList} />
        </div>
      </section>
    </main>
  );
}
