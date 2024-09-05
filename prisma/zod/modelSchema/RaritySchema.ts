import { z } from 'zod';
import type { FoodWithRelations } from './FoodSchema'
import type { FoodPartialWithRelations } from './FoodSchema'
import { FoodWithRelationsSchema } from './FoodSchema'
import { FoodPartialWithRelationsSchema } from './FoodSchema'

/////////////////////////////////////////
// RARITY SCHEMA
/////////////////////////////////////////

export const RaritySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Rarity = z.infer<typeof RaritySchema>

/////////////////////////////////////////
// RARITY PARTIAL SCHEMA
/////////////////////////////////////////

export const RarityPartialSchema = RaritySchema.partial()

export type RarityPartial = z.infer<typeof RarityPartialSchema>

/////////////////////////////////////////
// RARITY RELATION SCHEMA
/////////////////////////////////////////

export type RarityRelations = {
  food: FoodWithRelations[];
};

export type RarityWithRelations = z.infer<typeof RaritySchema> & RarityRelations

export const RarityWithRelationsSchema: z.ZodType<RarityWithRelations> = RaritySchema.merge(z.object({
  food: z.lazy(() => FoodWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// RARITY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RarityPartialRelations = {
  food?: FoodPartialWithRelations[];
};

export type RarityPartialWithRelations = z.infer<typeof RarityPartialSchema> & RarityPartialRelations

export const RarityPartialWithRelationsSchema: z.ZodType<RarityPartialWithRelations> = RarityPartialSchema.merge(z.object({
  food: z.lazy(() => FoodPartialWithRelationsSchema).array(),
})).partial()

export type RarityWithPartialRelations = z.infer<typeof RaritySchema> & RarityPartialRelations

export const RarityWithPartialRelationsSchema: z.ZodType<RarityWithPartialRelations> = RaritySchema.merge(z.object({
  food: z.lazy(() => FoodPartialWithRelationsSchema).array(),
}).partial())

export default RaritySchema;
