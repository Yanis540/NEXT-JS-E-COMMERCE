
import { FullProduct } from "@/types"
import { QueryClient, UseMutateFunction, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"


interface  useFavoritesType {
    error: unknown 
    data : {
        favorite_products : FullProduct[]
    }|undefined
    isLoading : boolean
}

const useFavorites = ()=>{
    const {data,isLoading,error} : useFavoritesType = useQuery({
        queryKey:["products","favorites"], 
        queryFn:async()=>{
            const response = await axios.get(`/api/products/favorites`)
            const data = await response.data
            return data;
        },
    }) 

    return {
        favorite_products: data?.favorite_products??[],
        isLoading,
        error
        
    }
}

export {
    useFavorites
}