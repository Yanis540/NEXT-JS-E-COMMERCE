-- CreateTable
CREATE TABLE "BasketProduct" (
    "id_order" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "qte" INTEGER NOT NULL,

    CONSTRAINT "BasketProduct_pkey" PRIMARY KEY ("id_order","id_product")
);

-- AddForeignKey
ALTER TABLE "BasketProduct" ADD CONSTRAINT "BasketProduct_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketProduct" ADD CONSTRAINT "BasketProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
