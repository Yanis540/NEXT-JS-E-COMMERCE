
import { calculateTotal } from "@/checkout/util/calculate-total";
import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { convertOrdersBasket } from "@/util/convert-order-basket";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import {ZodError, z} from "zod";

const stripe:Stripe = require('stripe')(process.env.STRIPE_SECRET!)

const createOrderBody = z.object({
    basket: z.array(z.object({
      id: z.string(),
      name: z.string(),
      image: z.string().nullable(),
      quantity: z.number(),
      qte:z.number(),
      category_ids: z.string(),
      description: z.string().nullable() ,
      price: z.number(),
      categories:z.array(z.object({
        id:z.string(), 
        name:z.string()
      }))
    })), 
    sessionId : z.string(),  
})
export async function POST(req:Request){
    try{
        const user = await serverAuth();
        const body = await req.json();
        const {basket,sessionId} = createOrderBody.parse(body)
        if(basket?.length===0)
            return new NextResponse('Basket can not be empty',{status:403})
        const alreadyExisting = await db.order.findFirst({
            where:{
                id:sessionId
            }
        })
        if(alreadyExisting)
            return new NextResponse("Order already passed", {status:400});

        const stripeSession= await stripe.checkout.sessions.retrieve(sessionId);
        if(!stripeSession?.status)
            return new NextResponse('Invalid Checkout Session');
        const productIds = basket.map((product)=>({id:product.id}));
        const amount = calculateTotal(basket);

        const unstructured_order = await db.order.create({
            data:{
                id: sessionId, 
                amount:amount , 
                products:{
                    connect:productIds
                }, 
                basket:{
                    create:basket.map((basketProduct)=>({
                        product:{
                            connect:{
                                id:basketProduct.id
                            }
                        }, 
                        qte: basketProduct.qte
                    }))
                },
                user:{
                    connect:{
                        id:user?.id
                    }
                }, 
                checkout_url : stripeSession.url??'', 
                checkout_status: stripeSession.status, 
                payment_status: stripeSession.payment_status, 
                type: stripeSession.submit_type??'',
                status : "progress"
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
        const order = convertOrdersBasket([unstructured_order])[0]

        return NextResponse.json({order:order})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_ORDER_CREATE"); 
        if(err instanceof ZodError)
            return new NextResponse("Invalid Input Shape", {status:401});
        return new NextResponse("Internal Error Server",{status:500})
    }
}