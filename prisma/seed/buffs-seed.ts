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
  buffs: string[];
}

const data = FoodData as FoodData[];

// Regex to extract buff details
const buffPattern =
  /([+-]?\d*\.?\d+)%?\s*(.*?)\sfor\s(\d+)\s(min|sec)|Immune to (.*)|(only once)/;

const parsedDataPromises = data.flatMap((v) => {
  return v.buffs.map(async (b) => {
    const food = await prisma.food.findFirst({
      where: {
        slug: v.slug,
      },
    });
    const match = buffPattern.exec(b);

    if (!food || !match) return;

    if (match[5]) {
      // Handle immunity buffs
      const buffType = await prisma.buffType.findFirst({
        where: {
          name: {
            contains: match[5].trim().toLowerCase(),
          },
        },
      });

      if (!buffType) return;

      return {
        value: 42,
        duration: 60 * 10,
        buff_type_id: buffType.id,
        food_id: food.id,
      };
    } else if (match[6]) {
      // Handle "only once" buffs
      const buffType = await prisma.buffType.findFirst({
        where: {
          name: {
            contains: match[2]?.trim().toLowerCase(),
          },
        },
      });

      if (!buffType) return;
      return {
        value: parseFloat(match[1]),
        duration: 0,
        buff_type_id: buffType.id,
        food_id: food.id,
      };
    } else {
      const buffType = await prisma.buffType.findFirst({
        where: {
          name: {
            contains: match[2].trim().toLowerCase(),
          },
        },
      });

      if (!buffType) return;

      const value = parseFloat(match[1]);
      const durationUnit = match[4];
      const duration = parseInt(match[3]) * (durationUnit === "min" ? 60 : 1);

      return {
        value,
        duration,
        buff_type_id: buffType.id,
        food_id: food.id,
      };
    }
  });
});

export default async function buffSeed() {
  function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
  }
  const parsedData = await Promise.all(parsedDataPromises);
  await prisma.buff.deleteMany();
  return await prisma.buff.createMany({
    data: parsedData.filter(notEmpty),
    skipDuplicates: true,
  });
}
