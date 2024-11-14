import { z } from 'zod';
import type { BuffTypeWithRelations } from './BuffTypeSchema'
import type { BuffTypePartialWithRelations } from './BuffTypeSchema'
import type { FoodWithRelations } from './FoodSchema'
import type { FoodPartialWithRelations } from './FoodSchema'
import { BuffTypeWithRelationsSchema } from './BuffTypeSchema'
import { BuffTypePartialWithRelationsSchema } from './BuffTypeSchema'
import { FoodWithRelationsSchema } from './FoodSchema'
import { FoodPartialWithRelationsSchema } from './FoodSchema'

/////////////////////////////////////////
// BUFF SCHEMA
/////////////////////////////////////////

export const BuffSchema = z.object({
  id: z.number().int(),
  value: z.number(),
  duration: z.number().int(),
  buff_type_id: z.number().int(),
  food_id: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Buff = z.infer<typeof BuffSchema>

/////////////////////////////////////////
// BUFF PARTIAL SCHEMA
/////////////////////////////////////////

export const BuffPartialSchema = BuffSchema.partial()

export type BuffPartial = z.infer<typeof BuffPartialSchema>

/////////////////////////////////////////
// BUFF RELATION SCHEMA
/////////////////////////////////////////

export type BuffRelations = {
  type: BuffTypeWithRelations;
  food: FoodWithRelations;
};

export type BuffWithRelations = z.infer<typeof BuffSchema> & BuffRelations

export const BuffWithRelationsSchema: z.ZodType<BuffWithRelations> = BuffSchema.merge(z.object({
  type: z.lazy(() => BuffTypeWithRelationsSchema),
  food: z.lazy(() => FoodWithRelationsSchema),
}))

/////////////////////////////////////////
// BUFF PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BuffPartialRelations = {
  type?: BuffTypePartialWithRelations;
  food?: FoodPartialWithRelations;
};

export type BuffPartialWithRelations = z.infer<typeof BuffPartialSchema> & BuffPartialRelations

export const BuffPartialWithRelationsSchema: z.ZodType<BuffPartialWithRelations> = BuffPartialSchema.merge(z.object({
  type: z.lazy(() => BuffTypePartialWithRelationsSchema),
  food: z.lazy(() => FoodPartialWithRelationsSchema),
})).partial()

export type BuffWithPartialRelations = z.infer<typeof BuffSchema> & BuffPartialRelations

export const BuffWithPartialRelationsSchema: z.ZodType<BuffWithPartialRelations> = BuffSchema.merge(z.object({
  type: z.lazy(() => BuffTypePartialWithRelationsSchema),
  food: z.lazy(() => FoodPartialWithRelationsSchema),
}).partial())

export default BuffSchema;
