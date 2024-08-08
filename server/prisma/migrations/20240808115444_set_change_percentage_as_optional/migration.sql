-- AlterTable
ALTER TABLE "ExpenseSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SalesSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;
