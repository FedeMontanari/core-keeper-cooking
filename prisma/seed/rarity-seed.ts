import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    id: 0,
    slug: "poor",
    name: "Poor",
  },
  {
    id: 1,
    slug: "common",
    name: "Common",
  },
  {
    id: 2,
    slug: "uncommon",
    name: "Uncommon",
  },
  {
    id: 3,
    slug: "rare",
    name: "Rare",
  },
  {
    id: 4,
    slug: "epic",
    name: "Epic",
  },
  {
    id: 5,
    slug: "legendary",
    name: "Legendary",
  },
];

export default async function seedRarity() {
  await prisma.rarity.deleteMany();
  return await prisma.rarity.createMany({
    data,
  });
}
