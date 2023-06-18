import {PrismaClient} from "@prisma/client"
import { Stripe } from "@stripe/stripe-js"

declare global {
    namespace globalThis {
        var prisma : PrismaClient
        var stripePromise : Promise<Stripe | null>
    }
}

