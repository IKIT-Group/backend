-- CreateTable
CREATE TABLE "Pet" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
