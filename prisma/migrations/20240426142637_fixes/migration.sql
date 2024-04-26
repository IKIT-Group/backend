/*
  Warnings:

  - You are about to drop the column `hasAntiCat` on the `Owner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "hasAntiCat",
ALTER COLUMN "livesAlone" SET DATA TYPE TEXT,
ALTER COLUMN "hadPets" SET DATA TYPE TEXT,
ALTER COLUMN "hasPets" SET DATA TYPE TEXT;
