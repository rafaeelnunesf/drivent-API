/*
  Warnings:

  - Added the required column `seats` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "seats" INTEGER NOT NULL;
