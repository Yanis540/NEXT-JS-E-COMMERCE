import { serverAuth } from "@/libs/server-auth";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{

        
        const user = await serverAuth();

        return NextResponse.json({user})

    }
    catch(err:any ){
        if((err.message as string).includes("Unauthorized") )
            return NextResponse.json({user:null})
        console.log(err.message,"ERROR_CURRENT"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}


