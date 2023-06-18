import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStoreBasket } from '@/context/store/use-store-basket';
import getStripe from '@/libs/stripe';
import Button from '@/components/Button/Button';
import { useStripeCheckout } from './hooks/use-stripe-checkout';
interface StripeCheckoutFormProps {

};

function StripeCheckoutForm({}:StripeCheckoutFormProps) {


    const {basket} = useStoreBasket()||{};
    const {isLoading,data,checkout} = useStripeCheckout()
    const handleSubmit_checkout = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {checkoutSession} = await checkout({basket:basket??[]})
        if(!checkoutSession){
            toast.error("Error creating a checkout ");
            return;
        }
        const stripe = await getStripe();
        await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id,
        })
        .then(()=>{
            toast.success("Payment done now let's update ")
        })
        .catch((err)=>toast.error(err.message))

    }

    return (
        <form
            onSubmit={handleSubmit_checkout}
            className="flex-1 flex  flex-col justify-center  gap-[20px] mx-auto w-[70%]  max-w-[800px] py-5 "
        >
            {/* <PaymentElement className="" /> */}
            <Button type="submit" disabled={isLoading}>Buy</Button>
        </form>
    );
};

export default StripeCheckoutForm;