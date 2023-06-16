import { useUpdateAccount } from '@/account/hooks/use-update-account';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import React from 'react';

interface UpdateFormProps {

};

function UpdateForm({}:UpdateFormProps) {
    const {register,Submit,errors,isLoading} = useUpdateAccount();
    return (
           
        <form className=' flex flex-col gap-4 mt-4' onSubmit={Submit}>
            <Input 
                id={"name"}
                label={"Name"}
                register={register} 
                errors={errors}
                disabled={isLoading}
            /> 
            <Input 
                id={"image"}
                label={"Image"}
                register={register} 
                errors={errors}
                disabled={isLoading}
            /> 
            <Input 
                id={"password"}
                label={"Password"}
                type="password"
                register={register} 
                errors={errors}
                disabled={isLoading}
            /> 
            <Input 
                id={"confirmPassword"}
                label={"Confirm Password"}
                type="password"
                register={register} 
                errors={errors}
                disabled={isLoading}
            /> 

            <Button className="mt-3 mx-auto text-center" type="submit">Update</Button>
        </form>  
    );
};

export default UpdateForm;