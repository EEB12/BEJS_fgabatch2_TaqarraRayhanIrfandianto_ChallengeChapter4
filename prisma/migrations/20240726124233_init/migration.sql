-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_destination_account_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_source_account_id_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "source_account_id" DROP NOT NULL,
ALTER COLUMN "destination_account_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_source_account_id_fkey" FOREIGN KEY ("source_account_id") REFERENCES "Bank_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_destination_account_id_fkey" FOREIGN KEY ("destination_account_id") REFERENCES "Bank_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
