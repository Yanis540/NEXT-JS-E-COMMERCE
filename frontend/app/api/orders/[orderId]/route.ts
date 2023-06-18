
import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";




export async function GET(req:Request,context:{params:{orderId:string}}){
    try{
        const user = await serverAuth();
        const {orderId} = context.params; 
        if(!orderId) 
            return new NextResponse("No orderId provided",{status:400})
        const order = await db.order.findFirst({
            where:{
                id: orderId, 
                user:{
                    id:user.id, 
                }
            }, 
            include:{
                products:true 
            }
        })
        if(!order)
            return new NextResponse(`No Order with ID ${orderId}`, {status:401})
        return NextResponse.json({order})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_ORDER_ID"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}