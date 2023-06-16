import { useError } from "@/hooks/use-error";
import { FullProduct } from "@/types";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


type useProductQuery = {
    data : undefined | {
        product: FullProduct
    }
    isLoading : boolean 
    error: unknown 
}
const useProduct=(productId: string)=>{
    const {data,isLoading,error}:useProductQuery = useQuery({
        queryKey:["products",productId], 
        queryFn: async()=>{
            const response = await axios.get(`/api/products/${productId}`);
            const data = await response.data ; 
            return data
        }
    })

    useError(error);

    return {
        product : data?.product,
        isLoading,
        error
    }
}

export {
    useProduct
}