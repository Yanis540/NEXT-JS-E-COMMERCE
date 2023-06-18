import { useError } from "@/hooks/use-error"
import { BasketProduct } from "@/types"
import { UseMutateAsyncFunction, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import Stripe from "stripe"
type PaymentIntentDetails ={
    checkoutSession : Stripe.Response<Stripe.Checkout.Session>
}
interface useStripeCheckoutMutation{
    data ?: PaymentIntentDetails
    error: unknown
     
    isLoading : boolean 
    mutateAsync: UseMutateAsyncFunction<PaymentIntentDetails, unknown, {
        basket: BasketProduct[];
    }, unknown>
}

const useStripeCheckout = ()=>{
    const {data,isLoading,error,mutateAsync:checkout} = useMutation({
        mutationKey:["checkout"], 
        mutationFn:async({basket}:{basket:BasketProduct[]})=>{
            const response = await axios.post('/api/checkout',{
                basket
            })
            const data:PaymentIntentDetails = await response.data 
            return data
        }
    }) 
    useError(error)
    return {
        data,isLoading,error,checkout
    }
}

export {
    useStripeCheckout
}
