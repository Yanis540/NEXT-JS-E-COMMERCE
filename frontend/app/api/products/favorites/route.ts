import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const user = await serverAuth();
        const favorites_products = (await db.user.findMany({
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
        }))
        console.log(favorites_products)

        return NextResponse.json({favorites_products})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITE_PRODUCTID"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}




