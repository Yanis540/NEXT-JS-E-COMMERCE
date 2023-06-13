import { FullUser } from '@/types'
import { UseMutateFunction } from '@tanstack/react-query'
import { create } from 'zustand'

interface UserState {
    user ?: FullUser  
    refetch_user : UseMutateFunction<any, unknown, void, unknown>
    set_user: (user:FullUser|undefined) => void
    set_refetch_user: (refetch_user:UseMutateFunction<any, unknown, void, unknown>) => void
    
}

const useStoreUser = create<UserState>((set:any)=>({
    user :undefined, 
    refetch_user: ()=>{},
    set_user : (user:FullUser|undefined)=>set((prev:UserState)=>{
        return {...prev,user}
    }),
    set_refetch_user:(refetch_user:UseMutateFunction<any, unknown, void, unknown>)=>set((prev:UserState)=>({
        ...prev,
        refetch_user: refetch_user
    }))

    
}))

export {
    useStoreUser
}