 import axios from "axios"

import {
    useMutation,
    UseMutateFunction,
  } from '@tanstack/react-query'
import { Category, Product } from "@prisma/client"
import { FullProduct } from "@/types"
import { useEffect } from "react"
import { useError } from "@/hooks/use-error"
  
interface useProductsType  {
    data ?: {products:FullProduct []},
    error: unknown 
    isLoading : boolean,
    mutate :UseMutateFunction<any, unknown, {
        name?: string | undefined;
        categories?: Category[];
    }, unknown> 
}
const useProducts= ()=>{
    const {data,error,isLoading,mutate:getProducts}:useProductsType= useMutation({
        mutationKey:["products"], 
        mutationFn:async({name,categories}:{name?:string,categories?:Category[]})=>{
            const response = await axios.put('/api/products',{name,categories:categories??[]})
            const data = await response.data
            return data;
        }
       
    })
    useError(error)
    useEffect(()=>{
        getProducts({})
    },[getProducts])
    return {
        products: data?.products?data.products:[],
        error,
        isLoading,
        getProducts
    }
}


export {useProducts}