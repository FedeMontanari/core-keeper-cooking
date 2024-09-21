import { z } from 'zod';

export const BuffTypeScalarFieldEnumSchema = z.enum(['id','name','slug','is_percent','created_at','updated_at']);

export default BuffTypeScalarFieldEnumSchema;
