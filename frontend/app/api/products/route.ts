import { db } from "@/libs/db";
import { NextResponse } from "next/server";
import {z} from 'zod'


const searchProductForm = z.object({
    name : z.string().optional(), 
    categories : z.array(z.object({id:z.string(),name:z.string()}))
})

export async function GET(req:Request){
    try{
        const products = await db.product.findMany({
            include:{
                categories:true
            }
        })

        return NextResponse.json({products})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}