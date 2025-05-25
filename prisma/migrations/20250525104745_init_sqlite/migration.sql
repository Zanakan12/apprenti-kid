-- CreateTable
CREATE TABLE "Enfant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "avatar" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserProgress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enfantId" INTEGER NOT NULL,
    "module" TEXT NOT NULL,
    "itemIndex" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProgress_enfantId_fkey" FOREIGN KEY ("enfantId") REFERENCES "Enfant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
