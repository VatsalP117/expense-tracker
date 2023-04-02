/*
  Warnings:

  - You are about to drop the `defCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "defCategories";

-- DropTable
DROP TABLE "userCategories";

-- CreateTable
CREATE TABLE "catgoryBudgets" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "budget" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "catgoryBudgets_pkey" PRIMARY KEY ("id")
);
