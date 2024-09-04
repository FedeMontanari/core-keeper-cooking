import { z } from 'zod';

export const RarityScalarFieldEnumSchema = z.enum(['id','slug','name']);

export default RarityScalarFieldEnumSchema;
