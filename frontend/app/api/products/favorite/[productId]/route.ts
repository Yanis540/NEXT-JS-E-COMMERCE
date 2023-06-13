
import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";




export async function POST(req:Request,context:{ params:{productId: string} }){
    try{
        const user = await serverAuth();
        const {productId} = context.params
        const existingProduct = await db.product.findFirst({
            where:{
                id:productId
            }
        })
        if(!existingProduct)
            return new NextResponse(`Product with id ${productId} Not Found`,{status:404})
        
        const updated_user = await db.user.update({
            where:{
                email:user?.email!
            }, 
            data:{
                favorite_products:{
                    connect:{
                        id:productId
                    }
                }
            }, 
            include:{
                favorite_products:{
                    include:{
                        categories:true
                    }
                }
            }
            
        })
        return NextResponse.json({updated_user})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITE_[PRODUCTID]"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}

export async function DELETE(req:Request,context:{ params:{productId: string} }){
    try{
        const user = await serverAuth();

        const {productId} = context.params
        const existingProduct = await db.product.findFirst({
            where:{
                id:productId
            }
        })
        if(!existingProduct)
            return new NextResponse(`Product with id ${productId} Not Found`,{status:404})
        
        const updated_user = await db.user.update({
            where:{
                email:user?.email!
            }, 
            data:{
                favorite_products:{
                    disconnect:{
                        id:productId
                    }
                }
            }, 
            include:{
                favorite_products:{
                    include:{
                        categories:true
                    }
                }
            }
        })

        return NextResponse.json({updated_user})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITE_[PRODUCTID]"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}