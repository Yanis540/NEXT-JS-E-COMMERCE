'use client'
import Drawer from '@/components/Drawer/Drawer';
import { useStoreBasket } from '@/context/store/use-store-basket';
import { BasketProduct } from '@/types';
import React, { useMemo } from 'react';
import ProductBasket from '@/components/Product/ProductBasket';
import Button from '@/components/Button/Button';
import Link from 'next/link';

interface NavbarBasketProps {
    onClose: ()=>void 
    visible : boolean 

};

function NavbarBasket({onClose,visible}:NavbarBasketProps) {
    const {basket} = useStoreBasket()||{};
    const try_basket:BasketProduct[] = [
        {
            category_ids:"",
            id: "20a0b09f-4fcb-48e7-a819-a2394638af0a", 
            image: "https://www.politix.com.au/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dwf131c577/images/hires/Summer23/D1%20Apparel%20Batch%202/YS07-BLACK-1-min.jpg?sw=2500&sh=3000&sm=cut",
            name: "Black Shirt",
            description:"",
            price: 0,
            qte: 1,
            quantity: 10, 
            categories : [
                {id: 'cf18e997-92d3-4bea-ba77-ac343d7f0b46', name: 'T-shirts'}, 
                {id: '9d6bedbf-a57f-4d44-9f9f-8f17bd7f7176', name: 'Men'}
            ]
        },
    ]
    return (
        <Drawer
            onClose={onClose}
            isOpen={visible}
        >
            <div className="flex flex-col h-full  w-full items-start ">
                <div className='flex-1 w-full overflow-y-scroll px-2  border-b-[0.05px] border-t-[0.05px] border-dark-gray scrollbar-hide '>
                    {
                        basket?.map((product)=>(
                            <ProductBasket key={product.id} product={product} /> 
                        ))
                    }
                    {
                        basket?.length== 0 && (
                            <div className="flex flex-col items-center justify-center h-full ">Empty Basket</div>
                        )
                    }
                </div>
                <div className="w-full">
                   <Button className="w-full ">
                        <Link href="/checkout">Checkout</Link>
                   </Button>
                </div>


                
            </div>
        </Drawer>
    );
};

export default NavbarBasket;