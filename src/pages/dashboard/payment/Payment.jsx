import React from 'react';
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_PK_SECRET);

const Payment = () => {
  return (
    <div>
        <HeadingTitle subHeading={"Please proceed to payment"} heading={"Payment"}></HeadingTitle>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    </div>
  )
}

export default Payment;