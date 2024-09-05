/*
  Warnings:

  - You are about to drop the column `buffTypeId` on the `Buff` table. All the data in the column will be lost.
  - You are about to drop the column `foodId` on the `Buff` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `foodValue` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `hpBoost` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `hps` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `ingameId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `rarityId` on the `Food` table. All the data in the column will be lost.
  - Added the required column `buff_type_id` to the `Buff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food_id` to the `Buff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Buff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `BuffType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food_value` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingame_id` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarity_id` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Rarity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Buff" DROP CONSTRAINT "buffId";

-- DropForeignKey
ALTER TABLE "Buff" DROP CONSTRAINT "typeId";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "rarityId";

-- AlterTable
ALTER TABLE "Buff" DROP COLUMN "buffTypeId",
DROP COLUMN "foodId",
ADD COLUMN     "buff_type_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "food_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "BuffType" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "createdAt",
DROP COLUMN "foodValue",
DROP COLUMN "hpBoost",
DROP COLUMN "hps",
DROP COLUMN "ingameId",
DROP COLUMN "rarityId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "food_value" INTEGER NOT NULL,
ADD COLUMN     "ingame_id" INTEGER NOT NULL,
ADD COLUMN     "rarity_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Rarity" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "rarityId" FOREIGN KEY ("rarity_id") REFERENCES "Rarity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buff" ADD CONSTRAINT "typeId" FOREIGN KEY ("buff_type_id") REFERENCES "BuffType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buff" ADD CONSTRAINT "buffId" FOREIGN KEY ("food_id") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
