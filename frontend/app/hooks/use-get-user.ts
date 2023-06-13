import { useStoreUser } from "@/context/store/use-store-user";
import { FullUser } from "@/types";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";


interface  useGetUserMutationType {
    error: unknown 
    data : {
        user : FullUser
    }|undefined
    isLoading : boolean
    mutate  : UseMutateFunction<any, unknown, void, unknown>
}

const useGetUser =()=>{
    const {set_user,set_refetch_user} = useStoreUser()
    const {data,isLoading,error,mutate}:useGetUserMutationType = useMutation({
        mutationKey:["current"], 
        mutationFn:async()=>{
            const response = await axios.get(`/api/current`)
            const data = await response.data
            return data;
        }
    })
    useEffect(()=>{
        mutate()
    },[mutate])
    useEffect(()=>{
        if(data?.user){

            set_user(data.user)
            set_refetch_user(mutate)
        }
    },[data?.user,set_user,set_refetch_user,mutate])
    return {
        data,isLoading,error,refetch_user: mutate
    }
} 


export default useGetUser;