import { db } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{

        
        const categories = await db.category.findMany({
            
        })
        return NextResponse.json({categories})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_CATEGORIES"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}

