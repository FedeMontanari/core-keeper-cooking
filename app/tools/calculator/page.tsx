import ToolHeader from "@/components/tool-header";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { env } from "process";
import React from "react";

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

const ENV = env.NODE_ENV;

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
          {fullList.length > 0 ? (
            <>
              <div className="pb-3">
                <Select>
                  <SelectTrigger className="w-[250px] h-fit">
                    <SelectValue placeholder="Ingredient 1" />
                  </SelectTrigger>
                  <SelectContent>
                    {fullList.map((food, i) => {
                      return (
                        <SelectItem value={food.slug} key={food.id}>
                          <Image
                            src={food.icon_url}
                            alt="Ingredient Icon"
                            width={32}
                            height={32}
                            className="inline"
                          />
                          <span className={`rarity-${food.rarityId}`}>
                            {food.name}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <Select>
                <SelectTrigger className="w-[250px] h-fit">
                  <SelectValue placeholder="Ingredient 2" />
                </SelectTrigger>
                <SelectContent>
                  {fullList.map((food, i) => {
                    return (
                      <SelectItem value={food.slug} key={food.id}>
                        <Image
                          src={food.icon_url}
                          alt="Ingredient Icon"
                          width={32}
                          height={32}
                          className="inline"
                        />
                        <span className={`rarity-${food.rarityId}`}>
                          {food.name}
                        </span>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </>
          ) : (
            <>
              <Skeleton className="h-12 w-52 rounded-md" />
              <Skeleton className="h-12 w-52 rounded-md" />
            </>
          )}
        </div>
      </section>
      <section className="w-11/12 h-fit pb-5 infocard-fancy"></section>
    </main>
  );
}
