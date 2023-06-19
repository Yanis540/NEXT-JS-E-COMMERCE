import OrderInformations from '@/components/Order/OrderInformations';
import ProductBasket from '@/components/Product/ProductBasket';
import { FullOrder } from '@/types';
import React from 'react';

interface OrderDetailsProps {
    order:FullOrder
};

function OrderDetails({order}:OrderDetailsProps) {
    return (
        <div className="flex flex-col gap-4">
           {/* Payment details */}
           <div className="flex flex-col border rounded-lg py-2">
                <h2 className='text-center text-dark-gray text-xl md:text-2xl lg:text-4xl font-bold '>Your Order</h2>
                <OrderInformations order={order} /> 
            
           </div>
           {/* Basket */}
           <div className='flex flex-col gap-4'>
            <h2 className="text-4xl text-dark-gray text-center">Basket </h2>
           {
                order?.basket?.map((product)=>(
                    <ProductBasket key={product.id} product={product}  order checkout/>
                ))
            }
           </div>
        </div>
    );
};

export default OrderDetails;