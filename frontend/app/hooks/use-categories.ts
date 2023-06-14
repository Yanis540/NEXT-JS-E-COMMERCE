
import { Category } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useError } from "./use-error"


interface  useCategoriesType {
    error: unknown 
    data : {
        categories : Category[]
    }|undefined
    isLoading : boolean
}

const useCategories = ()=>{
    const {data,isLoading,error} : useCategoriesType = useQuery({
        queryKey:["categories"], 
        queryFn:async()=>{
            const response = await axios.get(`/api/categories`)
            const data = await response.data
            return data;
        },
    }) 
    useError(error);
    return {
        categories:data?.categories??[],
        isLoading,
        error
    }
}

export {
    useCategories
}