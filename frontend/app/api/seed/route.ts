// import { NextResponse } from "next/server";
// import fs from 'fs'
// import path from 'path';
// import { db } from "@/libs/db";
// const splitStringByNotQuotedSemicolon = (input: string): string[] => {
//     const result = [];

import { NextResponse } from "next/server"

  
//     let currentSplitIndex = 0;
//     let isInString = false;
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] === "'") {
//         // toggle isInString
//         isInString = !isInString;
//       }
//       if (input[i] === ';' && !isInString) {
//         result.push(input.substring(currentSplitIndex, i + 1));
//         currentSplitIndex = i + 2;
//       }
//     }
  
//     return result;
// }


export async function POST(req:Request){
    try{
        
        return NextResponse.json({})
    }
    catch(err:any){

        console.log(err.message,"ERROR_SEED")
        return new NextResponse("Internal Server Error",{status:500})
    }
}
// export async function POST(req:Request){
//     try{
//         const rawSql = await fs.promises.readFile(path.join(__dirname, 'ecommerce.sql'), {
//             encoding: 'utf-8',
//         });
//         console.log(rawSql)
//         const sqlReducedToStatements = rawSql
//         .split('\n')
//         .filter((line) => !line.startsWith('--')) // remove comments-only lines
//         .join('\n')
//         .replace(/\r\n|\n|\r/g, ' ') // remove newlines
//         .replace(/\s+/g, ' '); // excess white space
//         const sqlStatements = splitStringByNotQuotedSemicolon(sqlReducedToStatements);
    
//         for (const sql of sqlStatements) {
//             console.log('SQL' , sql)
//             await db.$executeRawUnsafe(sql);
//         }

//         return NextResponse.json({})
//     }
//     catch(err:any){

//         console.log(err.message,"ERROR_SEED")
//         return new NextResponse("Internal Server Error",{status:500})
//     }
// }
