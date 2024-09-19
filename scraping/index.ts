const fs = require("node:fs");
const Cookbook: CookbookType[] = require("./Cookbook.json");
const Buffs: BuffType[] = require("./BuffIDs.json");
const Data: RootObject[] = require("./Data.json");
const Category: Category = require("./Category.json");

interface Category {
  [key: string]: {
    [subcategory: string]: string[];
  };
}
interface Item {
  id: number;
  variation: number;
  internalName: string;
  description: string | null;
  type: string;
  rarity: string;
  value: number;
  stackable: boolean;
  size: [number, number];
  acquisition: Acquisition;
  usage: Usage;
  materials?: Material[];
  buy?: number;
  boss?: boolean;
  health?: number;
  damageReduction?: number;
  faction?: string;
  conditions?: string[] | null; // This can include 'null' based on some items
  use?: string;
  equip?: Equip;
  loot?: Loot;
  pet?: Pet;
  projectile?: Projectile; // For items with projectiles
  set?: ItemSet; // For items with set bonuses
  level?: number; // For items with a level property
}

interface Acquisition {
  drop?: number[];
  shop?: number[];
  fished?: number[];
  inventory?: Inventory[];
  refined?: number[];
  crafted?: number[];
  container?: Container[];
  lock?: number[];
  battleArenaTable?: number;
  combined?: number[];
  containerTable?: number[];
  arch?: number; // Found in acquisition object with `arch: 1`
}

interface Inventory {
  id: number;
  scene: string;
}

interface Container {
  id: number;
  amount?: number;
  chance?: number;
}

interface Usage {
  combining?: number[];
  crafting?: Crafting;
  craftingMaterial?: number[];
  container?: Container[];
  refining?: number[];
  battleArenaTable?: number;
  includes?: number[]; // Found in crafting includes array
}

interface Crafting {
  type: string;
  canCraft: CraftItem[];
  includes?: number[]; // Found in crafting with includes property
}

interface CraftItem {
  id: number;
  amount: number;
}

interface Material {
  id: number;
  amount: number;
}

interface Equip {
  durability?: number;
  conditions?: EquipCondition[];
  range?: boolean;
  magic?: boolean;
  aps?: number; // Attacks per second
  damage?: Record<number, number>;
}

interface EquipCondition {
  id: number;
  value: Record<number, number>;
}

interface Loot {
  lootTable?: number;
  otherLootChance?: number;
  otherLoot?: {
    id: number;
    amount: number;
  }[];
  seasonalLoot?: SeasonalLoot[];
}

interface SeasonalLoot {
  season: number;
  loot: {
    id: number;
    amount: number;
    chance: number;
  }[];
}

interface Pet {
  type: number;
  fly: number;
  skills: number[];
  damage: Record<number, number>;
}

interface Projectile {
  pierce: boolean;
  bounce: boolean;
}

interface ItemSet {
  items: number[];
  effects: string[];
}

interface RootObject {
  [key: string]: Item;
}

type CookbookType = {
  name: string;
  stats: string;
  variation: number;
};

type BuffType = {
  name: string;
  slug: string;
};

function parseCookbook() {
  const arr: CookbookType[] = [];

  Cookbook.forEach((it) => {
    if (arr.some((v) => v.name === it.name)) return;
    arr.push(it);
  });

  try {
    fs.writeFileSync(
      "./scraping/cookbook-out.json",
      JSON.stringify(arr),
      "utf-8"
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing Cookboon.json");
  }
}

function parseBuffs() {
  const arr: BuffType[] = [];
  Buffs.forEach((it) => {
    const slug = it.name.toLowerCase().replaceAll(" ", "_");
    arr.push({
      name: it.name,
      slug,
    });
  });

  try {
    fs.writeFileSync("./scraping/buffs-out.json", JSON.stringify(arr), "utf-8");
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing Cookboon.json");
  }
}

function parseData() {
  const ingredientsList = Category["Consumable"]["Ingredient"];
  const fishList = Category["Consumable"]["Fish"];

  const mappedIng = ingredientsList.map((it) => {
    // @ts-expect-error key isn't recognized as a string for some reason?
    const item = Data[it];
    const food = {
      name: it,
      slug: it.toLocaleLowerCase().replaceAll(" ", "_"),
      food_value: parseInt(
        item.conditionsWhenCooked.regular.shift().replace("+", "").split(" ")[0]
      ),
      icon_url: `https://corekeeper.atma.gg/en/File:${it.replaceAll(
        " ",
        "_"
      )}.png`,
      ingame_id: item.id,
      rarity: item.rarity,
      buffs: item.conditionsWhenCooked.regular,
    };
    return food;
  });

  const mappedFish = fishList.map((it) => {
    // @ts-expect-error key isn't recognized as a string for some reason?
    const item = Data[it];
    const food = {
      name: it,
      slug: it.toLocaleLowerCase().replaceAll(" ", "_"),
      food_value: parseInt(
        item.conditionsWhenCooked.regular.shift().replace("+", "").split(" ")[0]
      ),
      icon_url: `https://corekeeper.atma.gg/en/File:${it.replaceAll(
        " ",
        "_"
      )}.png`,
      ingame_id: item.id,
      rarity: item.rarity,
      buffs: item.conditionsWhenCooked.regular,
    };
    return food;
  });

  try {
    fs.writeFileSync(
      "./scraping/data-out.json",
      JSON.stringify([mappedIng, mappedFish]),
      "utf-8"
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing Cookboon.json");
  }
}

function main() {
  // parseCookbook();
  // parseBuffs();
  parseData();
}

main();
