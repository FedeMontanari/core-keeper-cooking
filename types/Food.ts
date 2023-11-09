import { Buffs } from "./Buffs";
import { NameSlug } from "./NameSlug";

export interface Food extends NameSlug {
  id?: number;
  foodValue: number;
  hps: number;
  hpBoost?: number | null;
  icon: string;
  rarityId: number;
  buffs?: Buffs[];
  createdAt?: Date;
}
