-- RenameForeignKey
ALTER TABLE "Buff" RENAME CONSTRAINT "buff_id" TO "Buff_food_id_fkey";

-- RenameForeignKey
ALTER TABLE "Buff" RENAME CONSTRAINT "type_id" TO "Buff_buff_type_id_fkey";
