import { PrismaClient } from "@prisma/client";
import buffSeed from "./buffs-seed";
import buffTypeSeed from "./buff-type-seed";
import raritySeed from "./rarity-seed";
import foodSeed from "./food-seed";

const prisma = new PrismaClient();

async function main() {
  await raritySeed();
  console.log("Rarity Seeded");

  await foodSeed();
  console.log("Food Seeded");

  await buffTypeSeed();
  console.log("Buff Types Seeded");

  await buffSeed();
  console.log("Buffs Seeded");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
