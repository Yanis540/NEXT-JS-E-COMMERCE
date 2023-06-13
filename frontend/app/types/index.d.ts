import { Product , Category, User } from "@prisma/client"


type FullProduct = Product&{
    categories:Category[]
}
type BasketProduct = FullProduct&{qte:number}

type FullUser = User&{
    favorite_products:FullProduct[]
}