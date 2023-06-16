import React from 'react';

interface CheckoutProps {

};

function Checkout({}:CheckoutProps) {
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] h-screen max-h-screen w-full px-5 overflow-y-scroll scrollbar-hide">
            <div className='flex-1 flex flex-col md:flex-row  h-full w-full border border-red-500  '>
               Checkout page
           </div>
        </div>
    );
};

export default Checkout;