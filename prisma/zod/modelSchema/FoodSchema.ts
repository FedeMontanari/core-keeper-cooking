import { z } from 'zod';
import type { BuffWithRelations } from './BuffSchema'
import type { BuffPartialWithRelations } from './BuffSchema'
import type { RarityWithRelations } from './RaritySchema'
import type { RarityPartialWithRelations } from './RaritySchema'
import { BuffWithRelationsSchema } from './BuffSchema'
import { BuffPartialWithRelationsSchema } from './BuffSchema'
import { RarityWithRelationsSchema } from './RaritySchema'
import { RarityPartialWithRelationsSchema } from './RaritySchema'

/////////////////////////////////////////
// FOOD SCHEMA
/////////////////////////////////////////

export const FoodSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  foodValue: z.number().int(),
  hps: z.number(),
  icon_url: z.string(),
  hpBoost: z.number().int().nullish(),
  variation: z.number().int().nullish(),
  ingameId: z.number().int(),
  createdAt: z.coerce.date(),
  rarityId: z.number().int(),
})

export type Food = z.infer<typeof FoodSchema>

/////////////////////////////////////////
// FOOD PARTIAL SCHEMA
/////////////////////////////////////////

export const FoodPartialSchema = FoodSchema.partial()

export type FoodPartial = z.infer<typeof FoodPartialSchema>

/////////////////////////////////////////
// FOOD RELATION SCHEMA
/////////////////////////////////////////

export type FoodRelations = {
  buffs: BuffWithRelations[];
  rarity: RarityWithRelations;
};

export type FoodWithRelations = z.infer<typeof FoodSchema> & FoodRelations

export const FoodWithRelationsSchema: z.ZodType<FoodWithRelations> = FoodSchema.merge(z.object({
  buffs: z.lazy(() => BuffWithRelationsSchema).array(),
  rarity: z.lazy(() => RarityWithRelationsSchema),
}))

/////////////////////////////////////////
// FOOD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type FoodPartialRelations = {
  buffs?: BuffPartialWithRelations[];
  rarity?: RarityPartialWithRelations;
};

export type FoodPartialWithRelations = z.infer<typeof FoodPartialSchema> & FoodPartialRelations

export const FoodPartialWithRelationsSchema: z.ZodType<FoodPartialWithRelations> = FoodPartialSchema.merge(z.object({
  buffs: z.lazy(() => BuffPartialWithRelationsSchema).array(),
  rarity: z.lazy(() => RarityPartialWithRelationsSchema),
})).partial()

export type FoodWithPartialRelations = z.infer<typeof FoodSchema> & FoodPartialRelations

export const FoodWithPartialRelationsSchema: z.ZodType<FoodWithPartialRelations> = FoodSchema.merge(z.object({
  buffs: z.lazy(() => BuffPartialWithRelationsSchema).array(),
  rarity: z.lazy(() => RarityPartialWithRelationsSchema),
}).partial())

export default FoodSchema;
