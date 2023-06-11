import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db"

import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions={
    pages:{
        signIn : "/auth"
    },
    session: {
        strategy: "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET, 
    jwt:{
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                console.log("here with credn")
                console.log(credentials)
                if(!credentials?.email || !credentials?.password)
                    throw new Error("Unauthorized");
                const user = await db.user.findFirst({
                    where:{
                        email: credentials?.email
                    }
                })
                if(!user)
                    throw new Error(`No user with Email : ${credentials?.email}`)
                const isVerified = await bcrypt.compare(credentials.password,user?.password!);
                if(!isVerified)
                    throw new Error("Unathorized");

                return {...user,password:""} ; 
            }
        })
    ],
    adapter: PrismaAdapter(db),
}