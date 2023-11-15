import { Buffs } from "./Buffs";
import { NameSlug } from "./NameSlug";

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
