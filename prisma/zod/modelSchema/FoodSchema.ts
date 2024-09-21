import { z } from 'zod';
import { RaritySchema } from '../inputTypeSchemas/RaritySchema'
import type { BuffWithRelations } from './BuffSchema'
import type { BuffPartialWithRelations } from './BuffSchema'
import { BuffWithRelationsSchema } from './BuffSchema'
import { BuffPartialWithRelationsSchema } from './BuffSchema'

/////////////////////////////////////////
// FOOD SCHEMA
/////////////////////////////////////////

export const FoodSchema = z.object({
  rarity: RaritySchema,
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  food_value: z.number().int(),
  icon_url: z.string(),
  variation: z.number().int().nullish(),
  ingame_id: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
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
};

export type FoodWithRelations = z.infer<typeof FoodSchema> & FoodRelations

export const FoodWithRelationsSchema: z.ZodType<FoodWithRelations> = FoodSchema.merge(z.object({
  buffs: z.lazy(() => BuffWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// FOOD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type FoodPartialRelations = {
  buffs?: BuffPartialWithRelations[];
};

export type FoodPartialWithRelations = z.infer<typeof FoodPartialSchema> & FoodPartialRelations

export const FoodPartialWithRelationsSchema: z.ZodType<FoodPartialWithRelations> = FoodPartialSchema.merge(z.object({
  buffs: z.lazy(() => BuffPartialWithRelationsSchema).array(),
})).partial()

export type FoodWithPartialRelations = z.infer<typeof FoodSchema> & FoodPartialRelations

export const FoodWithPartialRelationsSchema: z.ZodType<FoodWithPartialRelations> = FoodSchema.merge(z.object({
  buffs: z.lazy(() => BuffPartialWithRelationsSchema).array(),
}).partial())

export default FoodSchema;
