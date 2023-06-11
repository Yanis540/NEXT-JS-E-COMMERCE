import { useCallback, useState } from "react";
import { Variant } from "../page";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios"
import {signIn} from "next-auth/react"
import {toast} from 'react-hot-toast'

const useAuthService = ()=>{
    const [variant,setVariant] = useState<Variant>('LOGIN');
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN')
            setVariant('REGISTER') 
        else
            setVariant("LOGIN")
    },[variant])
    const {
        register,
        handleSubmit , 
        formState:{
            errors
        }
    }= useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'', 
            password:''
        }
    });
    const onSubmit : SubmitHandler<FieldValues> = async(data)=>{
        setIsLoading(true); 
        try{
            //axios Register
            if( variant === 'REGISTER'){
                await axios.post('/api/register',data)
                await signIn('credentials',{data});
            }
            // NextAuth Login 
            if(variant === 'LOGIN'){
                const response = await signIn('credentials', {
                    ...data, 
                    redirect:false 
                })
                if(response?.error){
                    toast.error(response?.error)
                    throw new Error("")
                }
                toast.success("Logged In ! ")
            }
        }
        catch(err){
            toast.error("Something Went Wrong ! ")
        }
        finally{
            setIsLoading(false)
        }

    }  
    const socialAction = async(action : string)=>{
        setIsLoading(true);
        try{
            await signIn(action,{redirect:false})
            toast.success("Logged In ! ")

        }
        catch(err){
            toast.error("Invalid Credentials : An error Occured")
        }
        finally{
            setIsLoading(false)
        }
    }

    return {
        onSubmit,variant,register,errors,isLoading,socialAction,toggleVariant, handleSubmit
    }
}

export default useAuthService