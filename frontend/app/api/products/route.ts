import { db } from "@/libs/db";
import { FullProduct } from "@/types";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";



export async function GET(req:Request,context:{params:any}){
    try{
        const {searchParams} = new URL(req.url);
        const name = searchParams.get('name');
        const categories:Category[]  = (searchParams.get('categories')?JSON.parse(searchParams.get('categories')!):[] )as Category[] ;
        const categories_ids = categories.map((categorie)=>categorie.id); 
        const categories_names = categories.map((categorie)=>categorie.name); 
        let products: FullProduct[] = [];
        if(
            (!name || name.trim()=="" ) 
            && (! categories || categories.length==0)
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
                                    name:name?.trim().length==0?{}:{ contains : name?.trim()}
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
        console.log(err.message,"ERROR_PRODUCTS"); 
        return new NextResponse("Internal Error Server",{status:500})
    }
}