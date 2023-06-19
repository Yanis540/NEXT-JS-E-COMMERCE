import { BasketProduct, FullOrder } from "@/types"
import { Category, Order, Product , BasketProductOrder} from "@prisma/client";



const convertOrdersBasket = (orders:(Order & {
    basket: (BasketProductOrder & {
        product: Product & {
            categories: Category[];
        };
    })[];
})[])=>{
    const full_order: FullOrder[]= orders.map((order)=>{
        const basket:BasketProduct[] = order.basket.map((prod_basket)=>({
            qte:prod_basket.qte, 
            ...prod_basket.product
        }))
        return {
            ...order,
            basket
        }
    })
    return full_order
}
export {
    convertOrdersBasket
}