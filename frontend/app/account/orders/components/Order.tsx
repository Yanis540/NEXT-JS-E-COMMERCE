import OrderInformations from '@/components/Order/OrderInformations';
import { FullOrder } from '@/types';

interface OrderProps {
    order: FullOrder
};

function Order({order}:OrderProps) {
   
    return (
        <div className="
            flex flex-row items-center justify-center w-full  p-2 md:px-3 border 
            border-gray-100 rounded-lg bg-white hover:bg-gray-200 transition-all duration-200  
        ">
            {/*  */}
            <div className='flex flex-col items-center justify-center rounded-lg '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={order?.basket[0]?.image??''} 
                    alt="product" 
                    className="rounded-lg w-16 h-16 object-contain  " 
                />  
            </div>

            <OrderInformations order={order} /> 
         
        </div>
    );
};

export default Order;