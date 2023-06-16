import { db } from "@/libs/db";
import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";
import {z } from "zod"
import bcrypt from "bcrypt";
const optionnalPasswordSchema = z.union([z.string().length(0),z.string().min(4)]).optional().transform((e)=>e===""?undefined: e);
const optionnalURLSchema = z.union([z.string().length(0),z.string().url()]).optional().transform((e)=>e===""?undefined: e);
const updateSchema = z.object({
    name: z.string().optional(), 
    password: optionnalPasswordSchema, 
    confirmPassword: optionnalPasswordSchema, 
    image : optionnalURLSchema
}).superRefine(({password,confirmPassword},context)=>{
    if(password?.length!=0) 
        if(password!=confirmPassword)
            context.addIssue({
                code:'custom', 
                message:"The passwords did not match"
            });
})
export async function PUT(req:Request){
    try{

        
        const user = await serverAuth();
        const body = await req.json();
        const results = updateSchema.safeParse(body);
        if(!results.success)
            return new NextResponse("Invalid fields", {status: 400});
        const {name,password,confirmPassword,image} = results.data;
        let hashedPaswword: string|undefined; 
        if(password?.length)
            hashedPaswword = await bcrypt.hash(password,12);

        const updated_user = await db.user.update({
            where:{
                id: user.id
            }, 
            data:{
                name: name?.trim()?.length? name:undefined , 
                image: image?.trim()?.length? image:undefined , 
                hashedPassword: hashedPaswword?.trim()?.length? hashedPaswword:undefined , 
            }
        })
        return NextResponse.json({updated_user})
        return NextResponse.json({user})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_CURRENT_UPDATE"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}


