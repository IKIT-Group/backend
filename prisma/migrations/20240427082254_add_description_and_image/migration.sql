-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'fallback.png';
