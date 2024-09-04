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
  buffTypeId: z.number().int(),
  foodId: z.number().int().nullish(),
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
  Food?: FoodWithRelations | null;
};

export type BuffWithRelations = z.infer<typeof BuffSchema> & BuffRelations

export const BuffWithRelationsSchema: z.ZodType<BuffWithRelations> = BuffSchema.merge(z.object({
  type: z.lazy(() => BuffTypeWithRelationsSchema),
  Food: z.lazy(() => FoodWithRelationsSchema).nullish(),
}))

/////////////////////////////////////////
// BUFF PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BuffPartialRelations = {
  type?: BuffTypePartialWithRelations;
  Food?: FoodPartialWithRelations | null;
};

export type BuffPartialWithRelations = z.infer<typeof BuffPartialSchema> & BuffPartialRelations

export const BuffPartialWithRelationsSchema: z.ZodType<BuffPartialWithRelations> = BuffPartialSchema.merge(z.object({
  type: z.lazy(() => BuffTypePartialWithRelationsSchema),
  Food: z.lazy(() => FoodPartialWithRelationsSchema).nullish(),
})).partial()

export type BuffWithPartialRelations = z.infer<typeof BuffSchema> & BuffPartialRelations

export const BuffWithPartialRelationsSchema: z.ZodType<BuffWithPartialRelations> = BuffSchema.merge(z.object({
  type: z.lazy(() => BuffTypePartialWithRelationsSchema),
  Food: z.lazy(() => FoodPartialWithRelationsSchema).nullish(),
}).partial())

export default BuffSchema;
