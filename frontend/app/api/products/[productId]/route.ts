import { db } from "@/libs/db"
import { NextResponse } from "next/server"



export async function GET(req:Request,context:{ params:{productId: string} }){
    try{

        const {productId} = context.params
        const existingProduct = await db.product.findFirst({
            where:{
                id:productId
            }, 
            include:{
                categories:true,
            }
        })
        if(!existingProduct)
            return new NextResponse(`Product with id ${productId} Not Found`,{status:404})
        
    
        return NextResponse.json({product:existingProduct})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_[PRODUCTID]"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}