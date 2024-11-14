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
}

const data = FoodData as FoodData[];

export default async function buffSeed() {
  const parsedData = [];

  for (const v of data) {
    for (const b of v.buffs) {
      const food = await prisma.food.findFirst({
        where: {
          slug: v.slug,
        },
      });

      if (!food) {
        console.error(`Food not found for slug: ${v.slug}`);
        continue;  // Skip this iteration if food is not found
      }

      const buffType = await prisma.buffType.findFirst({
        where: {
          name: {
            contains: b.name,
          },
        },
      });

      if (!buffType) {
        throw new Error(`Buff Type not found for buff name: ${b.name}`);
      }

      parsedData.push({
        value: b.value,
        duration: b.duration,
        buff_type_id: buffType.id,
        food_id: food.id,
      });
    }
  }

  // Insert all collected data at once
  return await prisma.buff.createMany({
    data: parsedData,
    skipDuplicates: true,
  });
}
