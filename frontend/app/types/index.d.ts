import { Product , Category } from "@prisma/client"


type FullProduct = Product&{
    categories:Category[]
}
type BasketProduct = FullProduct&{qte:number}