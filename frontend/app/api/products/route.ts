import { db } from "@/libs/db";
import { FullProduct } from "@/types";
import { NextResponse } from "next/server";
import {ZodError, z} from "zod";

const categorieSchema = z.object({
    id:z.string(),
    name:z.string()
})

const bodySchema =z.object({
    name: z.string().optional(), 
    categories: z.array(
        categorieSchema
    ).optional()
}) 


export async function PUT(req:Request,context:{params:any}){
    try{
        const body = await req.json(); 
        const {categories,name} = bodySchema.parse(body);
        const categories_ids = !categories?[]:categories!.map((categorie)=>categorie.id); 
        const categories_names = !categories?[]:categories!.map((categorie)=>categorie.name); 
        let products: FullProduct[] = [];
        if(
            (!name || (name as string).trim()=="" ) 
            && (! categories || categories?.length==0)
        )
        
            products = await db.product.findMany({
                
                include:{
                    categories:true
                }
            })
        else 
            products = await db.product.findMany({
                where:{
                    AND:[
                        {
                            OR :[
                                {
                                    name:name?.trim().length==0?{}:{ contains : name?.trim(),mode:"insensitive"}
                                }, 
                                {
                                    categories:categories?.length == 0 ?{}:{
                                        some:{
                                            AND:[
                                                {
                                                    OR :[
                                                        {id:{in:categories_ids}}, 
                                                        {name:{in:categories_names}}
                                                    ]
                                                },
                                                {
                                                    OR :[
                                                        {name:{in:categories_names}},
                                                        {id:{in:categories_ids}}, 
                                                    ]
                                                },
                                            ]
                                            
                                        }
                                    }
                                }
                            ],
                        },
                        {
                            OR :[
                                {
                                    categories:categories?.length == 0 ?{}:{
                                        some:{
                                            AND:[
                                                {
                                                    OR :[
                                                        {id:{in:categories_ids}}, 
                                                        {name:{in:categories_names}}
                                                    ]
                                                },
                                                {
                                                    OR :[
                                                        {name:{in:categories_names}},
                                                        {id:{in:categories_ids}}, 
                                                    ]
                                                },
                                            ]
                                            
                                        }
                                    }
                                },
                                {
                                    name:name?.trim().length==0?{}:{ contains : name?.trim(),mode:"insensitive"}
                                }, 
                            ],
                        },
                    ]
                },
                include:{
                    categories:true
                }
            })
        return NextResponse.json({products})

    }
    catch(err:any ){
        if(err instanceof ZodError)
            return new NextResponse("Type conversion erorr",{status:403})
        console.log(err.message,"ERROR_PRODUCTS"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}