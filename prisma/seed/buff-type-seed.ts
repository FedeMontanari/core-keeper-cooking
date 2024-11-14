import { PrismaClient } from "@prisma/client";
import BuffTypesData from "../../scraping/buff-types-out.json";

const prisma = new PrismaClient();

interface BuffType {
  name: string;
  slug: string;
  is_percent?: boolean;
}

const data: BuffType[] = BuffTypesData.filter(
  (v, i, self) => i === self.findIndex((t) => t.slug === v.slug)
);

export default async function buffTypeSeed() {
  return await prisma.buffType.createMany({
    data,
    skipDuplicates: true,
  });
}
