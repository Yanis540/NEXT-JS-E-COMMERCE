import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{

        
        const user = await serverAuth();

        return NextResponse.json({user})

    }
    catch(err:any ){
        console.log(err.message,"ERROR_PRODUCTS_FAVORITE_PRODUCTID"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}


