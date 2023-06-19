/*
  Warnings:

  - You are about to drop the `BasketProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BasketProduct" DROP CONSTRAINT "BasketProduct_id_order_fkey";

-- DropForeignKey
ALTER TABLE "BasketProduct" DROP CONSTRAINT "BasketProduct_id_product_fkey";

-- DropTable
DROP TABLE "BasketProduct";

-- CreateTable
CREATE TABLE "BasketProductOrder" (
    "id_order" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "qte" INTEGER NOT NULL,

    CONSTRAINT "BasketProductOrder_pkey" PRIMARY KEY ("id_order","id_product")
);

-- AddForeignKey
ALTER TABLE "BasketProductOrder" ADD CONSTRAINT "BasketProductOrder_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketProductOrder" ADD CONSTRAINT "BasketProductOrder_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
