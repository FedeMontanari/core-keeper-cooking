import { z } from 'zod';

export const BuffTypeScalarFieldEnumSchema = z.enum(['id','name','slug']);

export default BuffTypeScalarFieldEnumSchema;
