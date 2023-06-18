import { BasketProduct } from "@/types"
import { UseMutateAsyncFunction, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import Stripe from "stripe"
type PaymentIntentDetails ={
    paymentIntent: Stripe.Response<Stripe.PaymentIntent>
        
    client_secret:string |null
}
interface usePayementIntentMutation{
    data ?: PaymentIntentDetails
    error: unknown
     
    isLoading : boolean 
    mutateAsync: UseMutateAsyncFunction<
        PaymentIntentDetails, 
        unknown, {
            basket: BasketProduct[];
        }, 
        unknown
    >
}

const usePayementIntent = ()=>{
    const {data,isLoading,error,mutateAsync:get_payment_intent}:usePayementIntentMutation = useMutation({
        mutationKey:["payment"], 
        mutationFn:async({basket}:{basket:BasketProduct[]})=>{
            const response = await axios.post('/api/payment',{
                basket
            })
            const data:PaymentIntentDetails = await response.data 
            return data
        }
    }) 
    return {
        data,isLoading,error,get_payment_intent
    }
}

export {
    usePayementIntent
}
