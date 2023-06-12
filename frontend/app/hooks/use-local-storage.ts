import { useEffect, useState } from "react"


type useLocalStorageType<T>={
    key:string , 
    initialValue : T | (()=>T)
}

function useLocalStorage<T>({key,initialValue}:useLocalStorageType<T> ) {

  const [value,setValue]= useState<T>(()=>{
    const jsonValue = localStorage.getItem(key) 
    if (jsonValue== null) 
    {
        if( typeof initialValue === 'function' )
            return (initialValue as ()=> T )()  
        else 
            return initialValue  
    }
    return JSON.parse(jsonValue)
  })
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[value,key])
  return [value,setValue] as [T, typeof setValue ]
}

export default useLocalStorage