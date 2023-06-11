import { db } from "@/libs/db";
import { NextResponse } from "next/server";
import {ZodError, z} from "zod"
import bcrypt from "bcrypt"

const bodySchema = z.object({
    email:z.string().email("Email required"),
    password: z.string(), 
    name:z.string()

})

export async function POST(req:Request){
    try{
        const body = await req.json();
        const {email,password,name} = bodySchema.parse(body);
        const existingUser = await db.user.findFirst({
            where:{
                email
            }
        })
        if(existingUser){
            return new NextResponse("Email already user", {status: 403})
        }
        const hashedPassword = await bcrypt.hash(password,12);

        const user = await db.user.create({
            data:{
                email,name, password: hashedPassword
            }
        });

        return NextResponse.json(user)
    }
    catch(err:any){
        if(err instanceof ZodError ){
            return new NextResponse("Invalid Schema",{status:403})
        }
        console.log(err.message,"ERROR_REGISTER")
        return new NextResponse("Internal Server Error",{status:500})
    }
}