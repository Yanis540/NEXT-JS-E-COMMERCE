'use client'
import clsx from 'clsx';
import React from 'react';
import { FieldErrors } from 'react-hook-form';
import ReactSelect from "react-select"
interface SelectProps {
    errors : FieldErrors
    label : string
    value?: Record<string,any> 
    onChange : (value:Record<string,any> )=>void 
    options : Record<string,any>[]
    disabled?:boolean 
};

function Select({label,value,onChange,options,disabled,errors}:SelectProps) {
    return (
        <div className="z-[50]">
            
          {/* <label className="block text-sm font-medium leading-6 text-gray-600">
            {label}
          </label> */}
          <div className='mt-2 font-medium leading-6'>
            <ReactSelect
                isDisabled={disabled}
                value={value}
                onChange={onChange}
                isMulti
                options={options}
                menuPortalTarget={typeof document !="undefined"? document.body: null}
                styles={{
                    menuPortal : (base)=>({
                        ...base , 
                        zIndex:30
                    })
                }}
                classNames={{
                    control:()=>clsx(
                        'text-sm font-medium leading-6', 
                        errors[label] && 'bg-ring-rose-500 rounded', 
                        disabled && 'opacity-50 cursor-not-allowed', 
                        
                    )
                }}
            />
          </div>
        </div>
    );
};

export default Select;