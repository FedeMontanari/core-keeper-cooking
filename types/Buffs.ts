import { NameSlug } from "./NameSlug";

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
