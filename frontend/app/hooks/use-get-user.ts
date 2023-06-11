import { db } from "@/libs/db";
import { getSession } from "next-auth/react"



const useGetUser =async()=>{
    try{
        const session = await getSession();
        if(!session?.user?.email)
            throw new Error("No session");
        const user = await db.user.findFirst({
            where:{
                email : session?.user?.email
            }
        });
        if(!user)
            throw new Error("No matching email ")
        return {...user,password:""};
    }
    catch(err){
        return null 
    }
} 


export default useGetUser;