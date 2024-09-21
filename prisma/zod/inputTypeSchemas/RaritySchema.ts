import { z } from 'zod';

export const RaritySchema = z.enum(['Poor','Common','Uncommon','Rare','Epic','Legendary']);

export type RarityType = `${z.infer<typeof RaritySchema>}`

export default RaritySchema;
