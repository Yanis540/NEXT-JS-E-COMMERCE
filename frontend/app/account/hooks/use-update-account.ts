import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { object, z } from "zod"
import { useAccount } from "./use-account";
import { useError } from "@/hooks/use-error";
import { useStoreUser } from "@/context/store/use-store-user";



const useUpdateAccount = ()=>{
    const {data:session} = useSession();
    const {data,isLoading,error,update} = useAccount(); 
    const {refetch_user} = useStoreUser();
    const optionnalPasswordSchema = z.union([z.string().length(0),z.string().min(4)]).optional().transform((e)=>e===""?undefined: e);
    const optionnalURLSchema = z.union([z.string().length(0),z.string().url()]).optional().transform((e)=>e===""?undefined: e);
    const updateSchema = z.object({
        name: z.string().default(session?.user?.name??'').optional(), 
        password: optionnalPasswordSchema, 
        confirmPassword: optionnalPasswordSchema, 
        image : optionnalURLSchema
    }).superRefine(({password,confirmPassword},context)=>{
        if(password?.length!=0) 
            if(password!=confirmPassword)
                context.addIssue({
                    code:'custom', 
                    message:"The passwords did not match"
                });
    })

    type UpdateFormType = z.infer<typeof updateSchema>



    const {
        register, 
        handleSubmit, 
        formState:{
            errors
        },
        reset
        
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            image : "",  
            password: '', 
            confirmPassword: ''
        }, 
        resolver: zodResolver(updateSchema)
    })
    const onSubmit : SubmitHandler<FieldValues> = async(data:UpdateFormType)=>{
        // api call 
        update(data)

    }
    const Submit = handleSubmit(onSubmit)
    useEffect(()=>{
        if(Object.keys(errors).length !=0){
            Object.keys(errors).map((key)=>{
                toast.error(errors[`${key}`]?.message as string??'')
            })
        }
    },[errors])
    useEffect(()=>{
        if(data){
            reset()
            refetch_user;
        }
        
    },[data,refetch_user,reset])
    useError(error);

    return {
        register , Submit, errors, isLoading
    }
}

export {
    useUpdateAccount,
}