import axios from "axios"

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { Category, Product } from "@prisma/client"
import { FullProduct } from "@/types"
  
interface useProductsType  {
    data ?: {products:FullProduct []},
    error: unknown 
    isLoading : boolean,
}
const useProducts= ()=>{
    const {data,error,isLoading}:useProductsType= useQuery({
        queryKey:["products"], 
        queryFn:async()=>{
            const response = await axios.get('/api/products')
            const data = await response.data
            return data;
        }
    })
    return {data,error,isLoading}
}


export {useProducts}