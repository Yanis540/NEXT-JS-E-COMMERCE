import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useProducts } from "@/hooks/use-products";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Category } from "@prisma/client";
const searchProductForm = z.object({
    name : z.string().optional(), 
    categories : z.array(z.object({value:z.string(),label:z.string()})).optional()
})
type SeacrhProductFormType= z.infer<typeof searchProductForm> 
const useSearchProducts = ()=>{
    const {products,isLoading,getProducts} = useProducts()


    
    const {
        register,
        handleSubmit , 
        formState:{
            errors
        }, 
        watch, 
        setValue
    }= useForm<FieldValues>({
        defaultValues:{
            name:'', 
            categories:[]
        }, 
        resolver:zodResolver(searchProductForm)
    });
    const onSubmit : SubmitHandler<FieldValues> = async(data:SeacrhProductFormType)=>{
        const {name,categories:categories_labels} = data
        const categories : Category[] = categories_labels?.map((category)=>({id:category.value,name:category.label}))??[]
        console.log({categories,name})
        getProducts({name,categories});



    }  

    const Submit =handleSubmit(onSubmit)
    useEffect(()=>{
        if(Object.keys(errors).length){
            console.log(errors)
            toast.error("An error occured")
        }
    },[errors])
    const watched_categories = watch('categories')
    return {
        register,errors,isLoading, Submit, setValue , watched_categories, products
    }
}

export default useSearchProducts