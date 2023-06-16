'use client'
import React from 'react'
import clsx from 'clsx'
import {
    FieldErrors, 
    FieldValues, 
    UseFormRegister
} from "react-hook-form"
interface InputProps {
    label ?: string 
    id : string 
    type ? : string 
    required ?: boolean 
    register : UseFormRegister<FieldValues> 
    errors : FieldErrors
    disabled ? : boolean 
    className ?: string
    placeholder?: string
}
function Input({label, id, type,required,register,errors,disabled,className,placeholder}: InputProps) {
  return (
    <div>
        {
            label && (
            <label 
                htmlFor={id}
                className='block text-sm font-medium leading-6 text-gray-900'
            >

                {label}
            </label>
            )
        }
        <div className='mt-2'>
            <input 
                id={id}
                type={type}
                autoComplete={id}
                placeholder={placeholder??''}
                disabled={disabled}
                {...register(id,{ required })}
                className={clsx(
                    className, 
                    `
                    form-input  block w-full rounded-md border-0 py-1.5 text-gray-900 font-medium leading-6
                    p-2
                    shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-dark-gray 
                    sm:text-sm sm:leading-6 
                `, 
                errors[id] && 'focus:ring-rose-500', 
                disabled && 'opacity-50 cursor-not-allowed', 
                )}
            /> 
        </div>
        

    </div>
  )
}

export default Input