-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('STOCK', 'CRYPTOCURRENCY', 'ETF', 'REAL_ESTATE_FUND', 'FIXED_INCOME', 'COMMODITY', 'MUTUAL_FUND', 'OPTIONS', 'FUTURES', 'SWAPS', 'PRIVATE_DEBT', 'FOREX', 'PRIVATE_EQUITY', 'VENTURE_CAPITAL', 'DIRECT_REAL_ESTATE');

-- CreateEnum
CREATE TYPE "TickerType" AS ENUM ('ORDINARY', 'PREFERRED', 'FRACTIONAL', 'DEPOSITARY_RECEIPT', 'CONVERTIBLE', 'RESTRICTED', 'TREASURY');

-- CreateTable
CREATE TABLE "accounts" (
    "id" VARCHAR(36) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(255),
    "account_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT,
    "symbol" VARCHAR(45),
    "asset_type" "AssetType" NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios_has_assets" (
    "portfolio_id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "quantity" DOUBLE PRECISION,
    "buy_price" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "portfolios_has_assets_pkey" PRIMARY KEY ("portfolio_id","asset_id")
);

-- CreateTable
CREATE TABLE "fixed_incomes" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "fixed_incomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stocks" (
    "id" TEXT NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "company_id" TEXT NOT NULL,
    "type" "TickerType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "market_value" DOUBLE PRECISION NOT NULL,
    "firm_value" DOUBLE PRECISION,
    "equity" DOUBLE PRECISION,
    "total_stocks" DOUBLE PRECISION,
    "assets" DOUBLE PRECISION,
    "current_assets" DOUBLE PRECISION,
    "availability" DOUBLE PRECISION,
    "listing_segment" TEXT,
    "free_float" DOUBLE PRECISION,
    "tag_along" DOUBLE PRECISION,
    "daily_liquidity" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crypto_currencies" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "market_cap" DOUBLE PRECISION,
    "circulating_supply" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "crypto_currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etfs" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "etfs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "real_estate_funds" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "real_estate_funds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dividends" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "dividend_amount" DOUBLE PRECISION,
    "payment_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "dividends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fundamental_indicators" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "type" TEXT,
    "value" DOUBLE PRECISION,
    "reference_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "fundamental_indicators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "id" VARCHAR(36) NOT NULL,
    "asset_id" VARCHAR(36) NOT NULL,
    "quote_date" TIMESTAMP(3),
    "open_price" DOUBLE PRECISION,
    "close_price" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE INDEX "idx_account_email" ON "accounts"("email");

-- CreateIndex
CREATE INDEX "idx_portfolio_accountId" ON "portfolios"("account_id");

-- CreateIndex
CREATE INDEX "idx_asset_type" ON "assets"("asset_type");

-- CreateIndex
CREATE INDEX "idx_asset_symbol" ON "assets"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "assets_symbol_asset_type_key" ON "assets"("symbol", "asset_type");

-- CreateIndex
CREATE INDEX "idx_portfolioAsset_assetId" ON "portfolios_has_assets"("asset_id");

-- CreateIndex
CREATE INDEX "idx_portfolioAsset_portfolioId" ON "portfolios_has_assets"("portfolio_id");

-- CreateIndex
CREATE INDEX "idx_fixed_incomes_assetId" ON "fixed_incomes"("asset_id");

-- CreateIndex
CREATE INDEX "idx_stock_assetId" ON "stocks"("asset_id");

-- CreateIndex
CREATE INDEX "idx_stock_companyId" ON "stocks"("company_id");

-- CreateIndex
CREATE INDEX "idx_crypto_assetId" ON "crypto_currencies"("asset_id");

-- CreateIndex
CREATE INDEX "idx_etf_assetId" ON "etfs"("asset_id");

-- CreateIndex
CREATE INDEX "idx_real_estate_fund_assetId" ON "real_estate_funds"("asset_id");

-- CreateIndex
CREATE INDEX "idx_dividend_assetId" ON "dividends"("asset_id");

-- CreateIndex
CREATE INDEX "idx_fundamental_assetId" ON "fundamental_indicators"("asset_id");

-- CreateIndex
CREATE INDEX "idx_quote_assetId" ON "quotes"("asset_id");

-- CreateIndex
CREATE INDEX "idx_quote_quoteDate" ON "quotes"("quote_date");

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios_has_assets" ADD CONSTRAINT "portfolios_has_assets_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios_has_assets" ADD CONSTRAINT "portfolios_has_assets_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fixed_incomes" ADD CONSTRAINT "fixed_incomes_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crypto_currencies" ADD CONSTRAINT "crypto_currencies_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etfs" ADD CONSTRAINT "etfs_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "real_estate_funds" ADD CONSTRAINT "real_estate_funds_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dividends" ADD CONSTRAINT "dividends_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fundamental_indicators" ADD CONSTRAINT "fundamental_indicators_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
