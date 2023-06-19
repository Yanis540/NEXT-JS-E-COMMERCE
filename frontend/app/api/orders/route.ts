
import { convertOrdersBasket } from "@/util/convert-order-basket";
import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { BasketProduct } from "@/types";
import { NextResponse } from "next/server";




export async function GET(req:Request){
    try{
        const user = await serverAuth();
        const unstructured_orders = await db.order.findMany({
            where:{
                user:{
                    id:user.id
                }
            },
            orderBy:[{"date":"desc"}], 
            include:{
                products:true,
                basket: {
                    include:{
                        product:{
                            include:{
                                categories:true
                            }
                        }
                    }
                } 
            }
        })
        const orders = convertOrdersBasket(unstructured_orders)
        return NextResponse.json({orders})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITE_[PRODUCTID]"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}