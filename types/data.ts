export interface Item {
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

export interface Acquisition {
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

export interface Inventory {
  id: number;
  scene: string;
}

export interface Container {
  id: number;
  amount?: number;
  chance?: number;
}

export interface Usage {
  combining?: number[];
  crafting?: Crafting;
  craftingMaterial?: number[];
  container?: Container[];
  refining?: number[];
  battleArenaTable?: number;
  includes?: number[]; // Found in crafting includes array
}

export interface Crafting {
  type: string;
  canCraft: CraftItem[];
  includes?: number[]; // Found in crafting with includes property
}

export interface CraftItem {
  id: number;
  amount: number;
}

export interface Material {
  id: number;
  amount: number;
}

export interface Equip {
  durability?: number;
  conditions?: EquipCondition[];
  range?: boolean;
  magic?: boolean;
  aps?: number; // Attacks per second
  damage?: Record<number, number>;
}

export interface EquipCondition {
  id: number;
  value: Record<number, number>;
}

export interface Loot {
  lootTable?: number;
  otherLootChance?: number;
  otherLoot?: {
    id: number;
    amount: number;
  }[];
  seasonalLoot?: SeasonalLoot[];
}

export interface SeasonalLoot {
  season: number;
  loot: {
    id: number;
    amount: number;
    chance: number;
  }[];
}

export interface Pet {
  type: number;
  fly: number;
  skills: number[];
  damage: Record<number, number>;
}

export interface Projectile {
  pierce: boolean;
  bounce: boolean;
}

export interface ItemSet {
  items: number[];
  effects: string[];
}

export interface RootObject {
  [key: string]: Item;
}
