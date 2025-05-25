/*
  Warnings:

  - A unique constraint covering the columns `[enfantId,module]` on the table `UserProgress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserProgress_enfantId_module_key" ON "UserProgress"("enfantId", "module");
