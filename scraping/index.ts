const fs = require("node:fs");
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

interface ParsedFood {
  name: string;
  slug: string;
  food_value: number;
  icon_url: string;
  ingame_id: number;
  rarity: string;
  buffs: string[];
}

interface ParsedBuff {
  value: number;
  duration: number;
  slug: string;
}

interface ParsedBuffType {
  name: string;
  slug: string;
  is_percent?: boolean;
}

// Regex to extract buff details
const buffPattern =
  /([+-]?\d*\.?\d+)%?\s*(.*?)\sfor\s(\d+)\s(min|sec)|Immune to (.*)|(only once)/;

function parseMapCb(it: string, arr: ParsedFood[]) {
  // @ts-expect-error key isn't recognized as a string for some reason?
  const item = Data[it];
  const itemBuffs = item.conditionsWhenCooked.regular.filter(
    (v: string) => !v.includes("food")
  );

  const finalBuffs: {
    value: number;
    duration: number;
    slug: string;
  }[] = itemBuffs.map((b: string) => {
    const match = buffPattern.exec(b);
  });

  arr.push({
    name: it,
    slug: it.toLocaleLowerCase().replaceAll(" ", "_"),
    food_value: parseInt(
      item.conditionsWhenCooked.regular
        .find((v: string) => v.includes("food"))
        .replace("+", "")
        .split(" ")[0]
    ),
    icon_url: `https://corekeeper.atma.gg/en/File:${it.replaceAll(
      " ",
      "_"
    )}.png`,
    ingame_id: item.id,
    rarity: item.rarity,
    buffs: finalBuffs,
  });
}

function parseFoodData() {
  const ingredientsList = Category["Consumable"]["Ingredient"];
  const fishList = Category["Consumable"]["Fish"];

  const arr: ParsedFood[] = [];

  ingredientsList.map((it) => parseMapCb(it, arr));

  fishList.map((it) => parseMapCb(it, arr));

  try {
    fs.writeFileSync("./scraping/food-out.json", JSON.stringify(arr), "utf-8");
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing food from Data.json");
  }
}

function parseBuffTypeData() {
  const ParsedFoodData: ParsedFood[] = require("./food-out.json");

  const arr: ParsedBuffType[] = [];
  const buffDurationRegex = / for\s(\d+)\s(min|sec)/;

  ParsedFoodData.map((f) => {
    f.buffs.map((b) => {
      let split = b.split(" ");
      split.shift();
      let buff = split.join(" ");
      buff = buff.replace(buffDurationRegex, "");
      arr.push({
        name: buff,
        slug: buff.toLocaleLowerCase().replaceAll(" ", "_"),
        is_percent: b.includes("%"),
      });
    });
  });

  try {
    fs.writeFileSync(
      "./scraping/buff-types-out.json",
      JSON.stringify(arr),
      "utf-8"
    );
  } catch (error) {
    console.error(error);
    throw new Error("Error parsing food from Data.json");
  }
}

function main() {
  console.log("Parsing Food Data...");
  parseFoodData();
  console.log("Food Data Parsed!!");

  console.log("--------------");

  console.log("Parsing Buff Types...");
  parseBuffTypeData();
  console.log("Buff Types Parsed!!");
}

main();
