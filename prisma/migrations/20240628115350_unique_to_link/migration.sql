/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_link_key" ON "BlogPost"("link");
