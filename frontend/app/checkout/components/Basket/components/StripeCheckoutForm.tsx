import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Stripe from 'stripe';
import { useStoreBasket } from '@/context/store/use-store-basket';
import getStripe from '@/libs/stripe';
import Button from '@/components/Button/Button';
import { useStripeCheckout } from './hooks/use-stripe-checkout';
interface StripeCheckoutFormProps {

};

function StripeCheckoutForm({}:StripeCheckoutFormProps) {

    const [isLoading,setIsLoading] = useState<boolean>(false)

    const {basket} = useStoreBasket()||{};
    const {data,checkout} = useStripeCheckout()
    
     
    const handleSubmit_checkout = async(e:FormDataEvent)=>{
        e.preventDefault();
        // Create a Checkout Session.
        const {checkoutSession} = await checkout({basket:basket??[]})
        if(!checkoutSession){
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to Checkout.
        const stripe = await getStripe();
        await stripe!.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: checkoutSession.id,
        })
        .then(()=>{
            toast.success("Payment done now let's update ")
            console.log("Update DB")
        })
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        .catch((err)=>toast.error(err.message))

    }



    return (
        <form
            onSubmit={handleSubmit_checkout}
            className="flex-1 flex  flex-col justify-center  gap-[20px] mx-auto w-[70%]  max-w-[800px] py-5 "
        >
            {/* <PaymentElement className="" /> */}
            <Button type="submit">Buy</Button>
        </form>
    );
};

export default StripeCheckoutForm;