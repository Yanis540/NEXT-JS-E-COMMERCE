import { useStoreBasket } from "@/context/store/use-store-basket"
import { useError } from "@/hooks/use-error"
import { BasketProduct, FullOrder, FullProduct } from "@/types"
import { UseMutateFunction, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-hot-toast"


interface useCreateOrderMutation {
    data : undefined |{
        order:FullOrder
    }
    error:any 
    isLoading: boolean 
    mutate : UseMutateFunction<void, unknown, {
        sessionId: string;
        basket: BasketProduct[];
    }, unknown>

}

const useCreateOrder = ()=>{
    const router = useRouter()
    const {clear_basket} = useStoreBasket()||{};
    const {data,isLoading,error,mutate : order}:useCreateOrderMutation = useMutation({
        mutationKey:['orders','create'], 
        mutationFn:async({sessionId,basket}:{sessionId:string,basket:BasketProduct[]})=>{
         
            const response = await axios.post('/api/orders/create',{basket,sessionId});
            const data= await response.data;
            return data ; 
        },
        onSuccess:()=>{
            toast.success('Order passed ! ');
            if(clear_basket)
                clear_basket()
            router.push('/account/orders')
        }
    })
    useError(error)
    useEffect(()=>{
        if((error?.response?.data as string)?.includes('Order already passed')){
            toast.success("Payment already valid")
            router.push('/account/orders')
        }
    },[error,router])
    return {
        data,isLoading,error,order
    }
}

export {
    useCreateOrder
}