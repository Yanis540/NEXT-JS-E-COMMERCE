import { useError } from "@/hooks/use-error"
import { FullOrder } from "@/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface useOrderQuery{
    data ?: {
        order:FullOrder
    } 
    isLoading: boolean 
    error:unknown 
}

const useOrder = (orderId:string)=>{
    const {data,isLoading,error} = useQuery({
        queryKey:["orders",orderId], 
        queryFn : async()=>{
            const response = await axios.get(`/api/orders/${orderId}`);
            const data = await response.data ; 
            return data 
        }
    })
    useError(error);
    return {
        order:data?.order??undefined , 
        error,
        isLoading

    }
}

export {
    useOrder
}
