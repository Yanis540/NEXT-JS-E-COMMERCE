import { BasketProduct, FullProduct } from "@/types";

const calculateTotal = (basket:BasketProduct[])=>{
    let sum = 0 ; 
    basket.map((product)=>{sum+=(product.price*product.qte)});
    return sum ; 
}
export {
    calculateTotal
}