import { z } from 'zod';

export const BuffScalarFieldEnumSchema = z.enum(['id','value','duration','buff_type_id','food_id','created_at','updated_at']);

export default BuffScalarFieldEnumSchema;
