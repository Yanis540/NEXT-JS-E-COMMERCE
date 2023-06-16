import { UseMutateFunction, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"



type useAccountMutationProps ={
    name ?: string
    password ? : string 
    confirmPassword ? : string 
    image ? : string
}

type useAccountType ={
    data? : any 
    isLoading: boolean 
    error : unknown
    mutate : UseMutateFunction<void, unknown, useAccountMutationProps, unknown>
}
const useAccount=()=>{
    const {data,isLoading,error,mutate:update}:useAccountType = useMutation({
        mutationKey: ['current','update'], 
        mutationFn:async({name,password,confirmPassword,image}:useAccountMutationProps)=>{
            const response = await axios.put('/api/current/update',{
                name,confirmPassword,password,image
            })
            const data = await response.data ; 
            return data;  
        }
    })
    return{
        data,isLoading,error, update
    }
}

export {
    useAccount
}