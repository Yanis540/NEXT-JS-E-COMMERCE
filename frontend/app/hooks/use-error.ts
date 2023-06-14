import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface useErrorProps {

};

const useError = (error:any)=>{
    useEffect(()=>{
        if(error)
            toast.error("An error occured : "+ error.message)
    },[error])
}

export {
    useError
}