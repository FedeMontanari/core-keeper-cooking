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
  buffs: (
    | { value: number; duration: number; name: string }
    | { value: number; duration: number; name?: undefined }
  )[];
  buff_types_unparsed: string[];
  variation?: number;
}

const data = FoodData as FoodData[];

const parsedData = data.map((v) => {
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
  return await prisma.food.createMany({
    data: parsedData,
    skipDuplicates: true,
  });
}
