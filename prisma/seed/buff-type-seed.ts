import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: "Critical Hit Chance",
    slug: "crit_hit",
  },
  {
    name: "Critical Hit Damage",
    slug: "crit_dmg",
  },
  {
    name: "Life On Melee Hit",
    slug: "hp_onhit",
  },
  {
    name: "Glow",
    slug: "glow",
  },
  {
    name: "Movement Speed",
    slug: "move_speed",
  },
  {
    name: "Max Health",
    slug: "max_hp",
  },
  {
    name: "Armor",
    slug: "armor",
  },
  {
    name: "Reduced Damage Taken from Bosses",
    slug: "boss_dmg_taken",
  },
  {
    name: "Increased Damage against Bosses",
    slug: "boss_dmg_done",
  },
  {
    name: "Range Damage",
    slug: "range_dmg",
  },
  {
    name: "Range Attack Speed",
    slug: "range_as",
  },
  {
    name: "Melee Damage",
    slug: "melee_dmg",
  },
  {
    name: "Melee Attack Speed",
    slug: "melee_as",
  },
  {
    name: "Mining Damage",
    slug: "mining_dmg",
  },
  {
    name: "Mining Speed",
    slug: "mining_as",
  },
  {
    name: "Chance to Knockback",
    slug: "knock_chance",
  },
  {
    name: "Less Food Drained While Running",
    slug: "minus_food_drain",
  },
  {
    name: "Dodge Chance",
    slug: "dodge_chance",
  },
  {
    name: "Immune To Acid Damage",
    slug: "immune_acid",
  },
  {
    name: "Immune To Being Slowed By Slime",
    slug: "immune_slime",
  },
  {
    name: "Immune To Mold Infection",
    slug: "immune_mold",
  },
  {
    name: "Immune To Burning",
    slug: "immune_burn",
  },
  {
    name: "Thorns Damage",
    slug: "thorns",
  },
  {
    name: "Fishing",
    slug: "fishing",
  },
  {
    name: "Damage",
    slug: "plus_dmg",
  },
  {
    name: "More Healing from Health Over Time Regeneration",
    slug: "plus_hots",
  },
];

export default async function buffTypeSeed() {
  await prisma.buffType.deleteMany();

  return await prisma.buffType.createMany({
    data,
  });
}
