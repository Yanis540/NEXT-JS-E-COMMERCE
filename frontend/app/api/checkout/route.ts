import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { BasketProduct, FullProduct } from "@/types";
import { NextResponse } from "next/server";
import { StringifyOptions } from "querystring";
import Stripe from "stripe";
import { ZodError, z } from "zod";
import { calculateTotal } from "@/checkout/util/calculate-total";
const stripe:Stripe = require('stripe')(process.env.STRIPE_SECRET!);

// Format amount for Stripe

const payementBodySchema = z.object({
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
    
  }))
})
const try_product:BasketProduct = {
    category_ids:"",
    id: "20a0b09f-4fcb-48e7-a819-a2394638af0a", 
    image: "https://www.politix.com.au/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dwf131c577/images/hires/Summer23/D1%20Apparel%20Batch%202/YS07-BLACK-1-min.jpg?sw=2500&sh=3000&sm=cut",
    name: "Black Shirt",
    description:"",
    price: 10,
    qte: 1,
    quantity: 10, 
    categories : [
        {id: 'cf18e997-92d3-4bea-ba77-ac343d7f0b46', name: 'T-shirts'}, 
        {id: '9d6bedbf-a57f-4d44-9f9f-8f17bd7f7176', name: 'Men'}
    ]
}


export async function POST(req:Request,context:{params:any}){
  try{
    const user = await serverAuth();
    const body = await req.json();
    const {basket} = payementBodySchema.parse(body)
    const checkoutSession  = await stripe.checkout.sessions.create({
      mode:"payment",
      payment_method_types:["card"],
      success_url:`http://localhost:3000/checkout?success=true&sessionId={CHECKOUT_SESSION_ID}`, 
      cancel_url:`http://localhost:3000/checkout?cancel=true&sessionId={CHECKOUT_SESSION_ID}`, 
      line_items:basket.map((product)=>({
        price_data:{
          currency:"usd", 
          product_data:{
            name:product.name,
            images:[product?.image??''],
          },
          unit_amount:product.price*100 
        },
        quantity:product.qte
      })
      )
    })
    console.log(checkoutSession)


   
    return NextResponse.json({checkoutSession})

  }
  catch(err:any ){
    console.log(err.message,"ERROR_CHECKOUT"); 

    if(err instanceof ZodError  ){
      return new NextResponse("Invalid schema",{status: 401})
    }

    return new NextResponse("Internal Error Server",{status:500})
  }
}