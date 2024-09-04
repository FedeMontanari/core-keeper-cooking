import { z } from 'zod';

export const BuffScalarFieldEnumSchema = z.enum(['id','value','duration','buffTypeId','foodId']);

export default BuffScalarFieldEnumSchema;
