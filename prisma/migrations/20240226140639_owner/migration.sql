-- CreateTable
CREATE TABLE "Owner" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "livesAlone" BOOLEAN NOT NULL,
    "hadPets" BOOLEAN NOT NULL,
    "hasPets" BOOLEAN NOT NULL,
    "hasAntiCat" BOOLEAN NOT NULL,
    "selfWalking" BOOLEAN NOT NULL,
    "canPay" BOOLEAN NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);
