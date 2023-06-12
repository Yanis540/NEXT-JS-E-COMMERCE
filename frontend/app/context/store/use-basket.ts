import { BasketProduct, FullProduct } from '@/types'
import { Product } from '@prisma/client'
import { create } from 'zustand'

interface BasketState {
  basket: BasketProduct[] 
  add: (product:FullProduct|Product) => void
  remove: (product:FullProduct|Product) => void
  remove_all: (id: string) => void
  clear_basket:()=>void
}

const useBasket = create<BasketState>((set:any,get:any)=>({
    basket : [], 
    add : (product:FullProduct|Product)=>set((prev:BasketState)=>{
        const index = prev.basket.map((prod:FullProduct)=>prod.id).indexOf(product.id); 
        const exists = index !==-1;
        const updated_basket = 
            !exists
            ?   [...prev.basket,{...product,qte:1}]
            :   prev.basket.map((prod:BasketProduct)=>prod.id!==product.id? prod : {
                ...prod, 
                qte:prod.qte+1
            })
        console.log(updated_basket)
        return {basket:updated_basket}
    }),
    remove : (product:FullProduct|Product)=>set((prev:BasketState)=>{
        const index = prev.basket.map((prod:FullProduct)=>prod.id).indexOf(product.id); 
        const exists = index !==-1;
        if(!exists)
            return prev; 
        return {
            basket:
            prev.basket[index].qte != 1
            ?   [...prev.basket,{...product,qte:prev.basket[index].qte -1}]
            :   prev.basket.filter((prod:BasketProduct)=>prod.id!=product.id)
        }
    }),
    remove_all : (id:string)=>set((prev:BasketState)=>({basket:prev.basket.filter((prod:BasketProduct)=>prod.id!=id)}))
    ,
    clear_basket : ()=>set((prev:BasketState)=>({basket:[]}))
    
}))

export {
    useBasket
}