import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Select from '@/components/Input/Select';
import { useCategories } from '@/hooks/use-categories';
import React, { BaseSyntheticEvent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface SidebarShopProps {
    register : UseFormRegister<FieldValues>
    isLoading : boolean 
    Submit : (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
    errors : FieldErrors<FieldValues>
    setValue: UseFormSetValue<FieldValues>
    watched_categories : any
};

function SidebarShop({register,isLoading, Submit,errors, setValue, watched_categories}:SidebarShopProps) {
    const {categories,isLoading:isLoadingCategories} = useCategories()
    // const static_categories = [{id:"123",name:'Men'},{id:"125",name:'T-Shirt'}]
   
    return (
        <div className="flex-[0.1] md:flex-[0.2] h-full  px-2 ">
            <form 
                className="flex flex-col items-center justify-center h-full "
                onSubmit={Submit}
            >
                {/* Input */}
                <div className="flex flex-col w-full border-[0.5px] border-gray-300 rounded p-2">
                    <h2 className="mb-4 pb-4 pt-2 border-b-[0.5px] border-b-gray-300 w-[calc( 100% + 8px )]  ">Filter  </h2>

                    <h2 className="">Name : </h2>
                    <Input 
                        id={"name"} 
                        placeholder='Name of product' 
                        className={"px-4 py-2 mb-4"} 
                        register={register} 
                        errors={errors} 
                        disabled={isLoading} 
                    /> 
                    {/* Categories select */}

                    <h2 className="">Category : </h2>

                    <Select 
                        label="categories"
                        disabled={isLoading||isLoadingCategories}
                        options={categories.map((category)=>({
                            value : category.id,
                            label : category.name, 
                        }))}
                        onChange={(value:any)=>setValue('categories',value,{
                            shouldValidate:true
                        })}
                        value={watched_categories}
                        errors={errors}
                    /> 
                </div>
                <Button 
                    type="submit" 
                    className="mt-4 w-full "
                    disabled={isLoading}
                >
                    Search
                </Button>
           </form>
        </div>
    );
};

export default SidebarShop;