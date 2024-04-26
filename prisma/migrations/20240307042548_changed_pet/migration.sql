/*
  Warnings:

  - Added the required column `gender` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasPassport` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sterilized` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "gender" BOOLEAN NOT NULL,
ADD COLUMN     "hasPassport" BOOLEAN NOT NULL,
ADD COLUMN     "health" TEXT NOT NULL,
ADD COLUMN     "sterilized" BOOLEAN NOT NULL;
