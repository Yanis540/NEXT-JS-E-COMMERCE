import { getSession } from "next-auth/react"
import { db } from "./db";




const serverAuth = async()=>{
    const session = await getSession();
    if(!session?.user?.email)
        throw new Error("Unauthorized");
    const user = await db.user.findFirst({
        where:{email:session.user.email}
    })
    if(!user)
        throw new Error("Unauthorized")

    return user ; 
}


export {
    serverAuth
}