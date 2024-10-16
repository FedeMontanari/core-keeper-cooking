import { PrismaClient } from "@prisma/client";
import FoodData from "../../scraping/food-out.json";
import { RarityType } from "../zod/inputTypeSchemas/RaritySchema";

const prisma = new PrismaClient();

interface FoodData {
  name: string;
  slug: string;
  food_value: number;
  icon_url: string;
  ingame_id: number;
  rarity: RarityType;
  buffs?: string[];
  variation?: number;
}

const data = FoodData as FoodData[];

const parsedData: FoodData[] = data.map((v) => {
  return {
    name: v.name,
    slug: v.slug,
    food_value: v.food_value,
    icon_url: v.icon_url,
    ingame_id: v.ingame_id,
    rarity: v.rarity,
  };
});

export default async function foodSeed() {
  await prisma.food.deleteMany();

  return await prisma.food.createMany({
    data: parsedData,
    skipDuplicates: true,
  });
}
