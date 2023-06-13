import { UseMutateAsyncFunction, UseMutateFunction, useMutation } from "@tanstack/react-query"
import axios from "axios"


interface  useFavoriteMutationType {

    mutateAsync : UseMutateAsyncFunction<any, unknown, void, unknown>
    error: unknown 
    data : any
    isLoading : boolean
}
const useFavorite = (productId:string)=>{
    const {data:dataIsAdding,isLoading:isLoadingAdding,error:errorAdding,mutateAsync:add} : useFavoriteMutationType = useMutation({
        mutationKey:["post","products","favorite","productId"], 
        mutationFn:async()=>{
            const response = await axios.post(`/api/products/favorite/${productId}`)
            const data = await response.data
            return data;
        },
    }) 
    const {data:dataIsRemoving,isLoading:isLoadingRemoving,error:errorRemoving,mutateAsync:remove} : useFavoriteMutationType = useMutation({
        mutationKey:["delete","products","favorite","productId"], 
        mutationFn:async()=>{
            const response = await axios.delete(`/api/products/favorite/${productId}`)
            const data = await response.data
            return data;
        },
    }) 

    return {
        adding : {
            data: dataIsAdding,
            isLoading:isLoadingAdding,
            error:errorAdding, 
            add
        }, 
        removing : {
            data: dataIsRemoving,
            isLoading:isLoadingRemoving,
            error:errorRemoving, 
            remove
        }, 
        
    }
}

export {
    useFavorite
}