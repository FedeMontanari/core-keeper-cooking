/*
  Warnings:

  - You are about to drop the column `rarity_id` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the `Rarity` table. If the table is not empty, all the data it contains will be lost.

*/


-- DropTable
DROP TABLE "Rarity" CASCADE;

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('Poor', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary');

-- AlterTable
ALTER TABLE "BuffType" ADD COLUMN     "is_percent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "rarity_id",
ADD COLUMN     "rarity" "Rarity" NOT NULL DEFAULT 'Poor';