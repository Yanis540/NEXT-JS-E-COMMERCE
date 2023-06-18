import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripe: Promise<Stripe | null>= global.stripePromise|| loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
const getStripe = () => {
  if (!stripe) {
    stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
  }
  global.stripePromise = stripe
  return stripe;
};
const stripePromise = stripe;
export {
  stripePromise
}
export default getStripe;