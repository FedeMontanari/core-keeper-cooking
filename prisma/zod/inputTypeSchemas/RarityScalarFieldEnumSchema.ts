import { z } from 'zod';

export const RarityScalarFieldEnumSchema = z.enum(['id','name','slug','created_at','updated_at']);

export default RarityScalarFieldEnumSchema;
