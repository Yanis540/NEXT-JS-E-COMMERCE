import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const user = await serverAuth();
        const favorite_products = (await db.user.findFirst({
            where:{
                id:user.id, 
            },
            select:{
                favorite_products:{
                    include:{
                        categories:true
                    }
                }
            }
        }))?.favorite_products??[]

        return NextResponse.json({favorite_products:favorite_products})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITES"); 
        if((err.message as string).includes("Unauthorized"))
            return new NextResponse("Unauthorized",{status:401})
        return new NextResponse("Internal Error Server",{status:500})
    }
}




