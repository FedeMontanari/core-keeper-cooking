import { z } from 'zod';

export const FoodScalarFieldEnumSchema = z.enum(['id','name','slug','food_value','icon_url','variation','ingame_id','created_at','updated_at','rarity_id']);

export default FoodScalarFieldEnumSchema;
