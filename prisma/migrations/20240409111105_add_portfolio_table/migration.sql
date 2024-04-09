-- CreateTable
CREATE TABLE "Portfolio" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(255),
    "accountId" VARCHAR(36) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
