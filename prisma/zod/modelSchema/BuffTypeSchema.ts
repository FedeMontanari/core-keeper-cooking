import { z } from 'zod';
import type { BuffWithRelations } from './BuffSchema'
import type { BuffPartialWithRelations } from './BuffSchema'
import { BuffWithRelationsSchema } from './BuffSchema'
import { BuffPartialWithRelationsSchema } from './BuffSchema'

/////////////////////////////////////////
// BUFF TYPE SCHEMA
/////////////////////////////////////////

export const BuffTypeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type BuffType = z.infer<typeof BuffTypeSchema>

/////////////////////////////////////////
// BUFF TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const BuffTypePartialSchema = BuffTypeSchema.partial()

export type BuffTypePartial = z.infer<typeof BuffTypePartialSchema>

/////////////////////////////////////////
// BUFF TYPE RELATION SCHEMA
/////////////////////////////////////////

export type BuffTypeRelations = {
  buff: BuffWithRelations[];
};

export type BuffTypeWithRelations = z.infer<typeof BuffTypeSchema> & BuffTypeRelations

export const BuffTypeWithRelationsSchema: z.ZodType<BuffTypeWithRelations> = BuffTypeSchema.merge(z.object({
  buff: z.lazy(() => BuffWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BUFF TYPE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BuffTypePartialRelations = {
  buff?: BuffPartialWithRelations[];
};

export type BuffTypePartialWithRelations = z.infer<typeof BuffTypePartialSchema> & BuffTypePartialRelations

export const BuffTypePartialWithRelationsSchema: z.ZodType<BuffTypePartialWithRelations> = BuffTypePartialSchema.merge(z.object({
  buff: z.lazy(() => BuffPartialWithRelationsSchema).array(),
})).partial()

export type BuffTypeWithPartialRelations = z.infer<typeof BuffTypeSchema> & BuffTypePartialRelations

export const BuffTypeWithPartialRelationsSchema: z.ZodType<BuffTypeWithPartialRelations> = BuffTypeSchema.merge(z.object({
  buff: z.lazy(() => BuffPartialWithRelationsSchema).array(),
}).partial())

export default BuffTypeSchema;
