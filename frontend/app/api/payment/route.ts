import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { FullProduct } from "@/types";
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


export async function POST(req:Request,context:{params:any}){
  try{
    const user = await serverAuth();
    const body = await req.json();
    const {basket} = payementBodySchema.parse(body)
    const amount = calculateTotal(basket)*100// this is for stripe 
    console.log(amount)
    const paymentIntent:Stripe.Response<Stripe.PaymentIntent>= await stripe.paymentIntents.create({
      payment_method_types:["card"],
      amount: amount,
      currency: "usd",
      
    });
    return NextResponse.json({paymentIntent, client_secret: paymentIntent.client_secret})

  }
  catch(err:any ){
    console.log(err.message,"ERROR_CHECKOUT"); 

    if(err instanceof ZodError  ){
      return new NextResponse("Invalid schema",{status: 401})
    }

    return new NextResponse("Internal Error Server",{status:500})
  }
}