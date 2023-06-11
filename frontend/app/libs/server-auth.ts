import { getSession } from "next-auth/react"
import { db } from "./db";
import { getServerSession } from "next-auth";




const serverAuth = async()=>{
    const session = await getServerSession();
    if(!session?.user?.email)
        throw new Error("Unauthorized");
    const user = await db.user.findFirst({
        where:{email:session.user.email}, 
        include:{
            favorite_products:{
                include:{
                    categories:true
                }
            }
        }
    })
    if(!user)
        throw new Error("Unauthorized")

    return user ; 
}


export {
    serverAuth
}