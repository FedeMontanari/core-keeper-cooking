export interface Buffs {
  id: number;
  name: string;
  slug: string;
  value: number;
  duration: number;
  buffTypeId?: number;
  foodId?: number;
}

export interface BuffType extends NameSlug {
  id: number;
}

export interface Food extends NameSlug {
  id?: number;
  foodValue: number;
  hps: number;
  icon_url: string;
  hpBoost?: number | null;
  variation?: number | null;
  ingameId: number;
  buffs?: Buffs[];
  createdAt?: Date;
  rarityId: number;
}

export interface NameSlug {
  name: string;
  slug: string;
}
