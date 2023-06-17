import useStore from '@/hooks/use-store'
import { BasketProduct, FullProduct } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
interface BasketState {
  basket: BasketProduct[] 
  add: (product:FullProduct) => void
  remove: (product:FullProduct) => void
  remove_all: (id: string) => void
  clear_basket:()=>void
}
const set_local_basket = (basket:BasketProduct[])=>{
    localStorage.setItem("basket",JSON.stringify(basket))
}
const useBasket =  create(
    persist<BasketState>(
        (set:any,get:any)=>({
            basket : typeof window !="undefined"&&localStorage?.getItem("basket")?JSON.parse(localStorage.getItem("basket")!):[], 
            add : (product:FullProduct)=>set((prev:BasketState)=>{

                const index = prev.basket.map((prod:FullProduct)=>prod.id).indexOf(product.id); 
                const exists = index !==-1;
                const updated_basket:BasketProduct[] = 
                    !exists
                    ?   [...prev.basket,{...product,qte:1}]
                    :   prev.basket.map((prod:BasketProduct)=>
                            prod.id!==product.id
                            ? prod
                            : {
                                ...prod,
                                qte:prod.qte+1
                            }
                        )
                set_local_basket(updated_basket)
                return {basket:updated_basket}
            }),
            remove : (product:FullProduct)=>set((prev:BasketState)=>{
                const index = prev.basket.map((prod:FullProduct)=>prod.id).indexOf(product.id);
                const exists = index !==-1;
                if(!exists)
                    return prev; 
                const updated_basket = prev.basket[index].qte != 1
                    ?   prev.basket.map((prod:BasketProduct)=>prod.id!=product.id?prod : {...prod, qte:prod.qte-1})
                    :   prev.basket.filter((prod:BasketProduct)=>prod.id!=product.id)
                ;
                set_local_basket(updated_basket)
                return {
                    basket:updated_basket
                }
            }),
            remove_all : (id:string)=>set((prev:BasketState)=>{
                const updated_basket = prev.basket.filter((prod:BasketProduct)=>prod.id!=id)
                set_local_basket(updated_basket)
                return {
                    ...prev,
                    basket : updated_basket
                }
            })
            ,
            clear_basket : ()=>set((prev:BasketState)=>{
                set_local_basket([])
                return {
                    ...prev, 
                    basket:[]
                }
            })
    
        }), 
        {
            name:"store-basket"
        }
    )
)

const useStoreBasket =()=> useStore(useBasket,state=>state)


export {
    useStoreBasket
}