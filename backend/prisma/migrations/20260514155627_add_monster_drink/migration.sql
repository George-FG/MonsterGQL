-- CreateTable
CREATE TABLE "MonsterDrink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "globalRank" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MonsterDrink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonsterDrink_name_key" ON "MonsterDrink"("name");
