/*
  Warnings:

  - Added the required column `userEmail` to the `userCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userCategories" ADD COLUMN     "userEmail" TEXT NOT NULL;
