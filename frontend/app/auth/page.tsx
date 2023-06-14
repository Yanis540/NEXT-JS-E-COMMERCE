'use client'
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { useCallback, useEffect, useState } from 'react'
import { FieldValues, useForm  , SubmitHandler} from 'react-hook-form';
import AuthSocialButton from './components/AuthSocialButton';
import {BsGoogle, BsGithub} from 'react-icons/bs'
import {toast} from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import axios from 'axios'
import useAuthService from './services/auth-service';
export type Variant = 'LOGIN'|'REGISTER'

interface AuthProps {

};

function Auth({}:AuthProps) {
    const session = useSession();
    const {
        Submit,variant,register,errors,isLoading,
        socialAction,toggleVariant
    } = useAuthService()
    const router = useRouter();
  
    useEffect(()=>{
        if(session?.status  === 'authenticated'){
            console.log("authenticated")
            router.push('/')
        }
    },[session?.status,router])

    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className="text-center text-light-gray mb-3 text-xl font-bold">Authenticate</h2>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                <form 
                    className='space-y-6 '
                    onSubmit={Submit}
                >
                    {
                        variant === 'REGISTER' && (
                            <Input id={"name"}label={"Name"}register={register} errors={errors}disabled={isLoading}/> 
                        )
                    }
                    <Input id={"email"}label={"email"}register={register} errors={errors}disabled={isLoading}/> 
                    <Input id={"password"}label={"Password"}type={"password"}register={register} errors={errors}disabled={isLoading}/> 
                    <div>
                        <Button disabled={isLoading} fullWidth type='submit'>
                            {variant === 'LOGIN' ? 'Sign In ' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                            
                        </div>
                        <div className='relative flex justify-center text-sm '>
                            <span className='bg-white px-2 text-gray-500'>
                                Or continue with
                            </span>
                        </div>

                    </div>
                    <div className='mt-6 flex gap-2'>
                        <AuthSocialButton icon={BsGithub}
                            onClick={()=>socialAction('github')}
                        /> 
                        <AuthSocialButton icon={BsGoogle}
                            onClick={()=>socialAction('google')}
                        /> 
                    </div>
                </div>
                <div className='flex gap- justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div>
                        {variant === 'LOGIN' ? 'Don\'t have an account?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer ml-2"
                    >
                        {variant==='LOGIN' ? 'Register' : 'Sign In'}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Auth;