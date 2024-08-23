-- DropForeignKey
ALTER TABLE "Buff" DROP CONSTRAINT "Buff_buffTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Buff" DROP CONSTRAINT "Buff_foodId_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_rarityId_fkey";

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "rarityId" FOREIGN KEY ("rarityId") REFERENCES "Rarity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buff" ADD CONSTRAINT "typeId" FOREIGN KEY ("buffTypeId") REFERENCES "BuffType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buff" ADD CONSTRAINT "buffId" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
