import React from 'react';
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_PK_SECRET);

const Payment = () => {

  const [cart] = useCart();
  const total = cart.reduce((sum,item)=>sum + item.price, 0 );
  const price = parseFloat(total.toFixed(2))

  return (
    <div>
        <HeadingTitle subHeading={"Please proceed to payment"} heading={"Payment"}></HeadingTitle>
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
    </div>
  )
}

export default Payment;