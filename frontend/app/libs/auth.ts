import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db"

import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions={
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET! as string , 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID! as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID! as string,
            clientSecret: process.env.GITHUB_SECRET! as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email",type: "text",},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password)
                    throw new Error("Unauthorized");
                const user = await db.user.findFirst({
                    where:{
                        email: credentials?.email
                    }
                })
                if(!user)
                    throw new Error(`No user with Email : ${credentials?.email}`)
                const isCorrectPassword = await bcrypt.compare(credentials.password,user?.hashedPassword!);
                if(!isCorrectPassword)
                    throw new Error("Unauthorized");

                return user ; 
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development'
}