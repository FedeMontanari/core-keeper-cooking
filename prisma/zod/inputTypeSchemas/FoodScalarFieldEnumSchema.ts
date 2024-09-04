import { z } from 'zod';

export const FoodScalarFieldEnumSchema = z.enum(['id','name','slug','foodValue','hps','icon_url','hpBoost','variation','ingameId','createdAt','rarityId']);

export default FoodScalarFieldEnumSchema;
