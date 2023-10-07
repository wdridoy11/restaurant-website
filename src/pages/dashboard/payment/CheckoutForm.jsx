import React, { useState } from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError]= useState();
    const handleSubmit= async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        })

        if(error){
            setCardError(error.message)
        }else{
            setCardError("")
            console.log("payment Methord", paymentMethod)
        }

    }

  return (
    <>
        <form className='w-full m-8' onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className='px-5 py-2 bg-black text-white text-base font-medium rounded-md mt-5' type="submit" disabled={!stripe}>Pay</button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm