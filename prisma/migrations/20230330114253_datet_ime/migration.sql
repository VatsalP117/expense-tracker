/*
  Warnings:

  - Made the column `category` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "remarks" DROP NOT NULL;
