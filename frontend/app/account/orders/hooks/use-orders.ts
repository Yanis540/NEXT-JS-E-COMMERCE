import { useError } from "@/hooks/use-error";
import { FullOrder } from "@/types";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
interface useOrdersQuery{
    isLoading:boolean 
    error: unknown 
    data ?:{
        orders:FullOrder[]
    }
}
const useOrders = ()=>{
    const {data,isLoading,error}:useOrdersQuery = useQuery({
        queryKey:["orders"], 
        queryFn:async()=>{
            const response = await axios.get('/api/orders');
            const data = await response.data 
            return data; 
        }

    })
    useError(error);
    
    return {
        orders:data?.orders??[],
        isLoading,
        error 
    }
}


export {
    useOrders
}