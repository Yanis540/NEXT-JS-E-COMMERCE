
import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { convertOrdersBasket } from "@/util/convert-order-basket";
import { NextResponse } from "next/server";




export async function GET(req:Request,context:{params:{orderId:string}}){
    try{
        const user = await serverAuth();
        const {orderId} = context.params; 
        if(!orderId) 
            return new NextResponse("No Order ID provided",{status:400})
        const unstructured_order = await db.order.findFirst({
            where:{
                id: orderId, 
                user:{
                    id:user.id, 
                }
            }, 
            include:{
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
        if(!unstructured_order)
            return new NextResponse(`No Order with ID ${orderId}`, {status:401})
        const order = convertOrdersBasket([unstructured_order])[0]
        
        return NextResponse.json({order})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_ORDER_ID"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}