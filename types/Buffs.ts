import { NameSlug } from "./NameSlug";

export interface Buffs extends NameSlug {
  id: number;
  value: number;
  duration: number;
  foodId?: number;
  buffTypeId?: number;
}
