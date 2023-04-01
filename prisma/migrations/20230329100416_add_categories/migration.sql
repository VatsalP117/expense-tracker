-- CreateTable
CREATE TABLE "defCategories" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "budget" TEXT NOT NULL,

    CONSTRAINT "defCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userCategories" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "budget" TEXT NOT NULL,

    CONSTRAINT "userCategories_pkey" PRIMARY KEY ("id")
);
