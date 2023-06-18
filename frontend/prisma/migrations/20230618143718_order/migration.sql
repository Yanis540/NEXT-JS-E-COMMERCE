/*
  Warnings:

  - The values [succeeded] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `checkout_status` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkout_url` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'unpaid', 'no_payment_required');

-- CreateEnum
CREATE TYPE "CheckoutStatus" AS ENUM ('open', 'complete', 'expired');

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('progress', 'cancelled', 'delivered');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "checkout_status" "CheckoutStatus" NOT NULL,
ADD COLUMN     "checkout_url" TEXT NOT NULL,
ADD COLUMN     "payment_status" "PaymentStatus" NOT NULL;
