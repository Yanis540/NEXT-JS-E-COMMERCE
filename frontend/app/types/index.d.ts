import { Product , Category, User, Order } from "@prisma/client"


type FullProduct = Product&{
    categories:Category[]
}
type BasketProduct = FullProduct&{qte:number}

type FullUser = User&{
    favorite_products:FullProduct[]
}

type FullOrder = Order & {
    products: Product[];
}