import React, { useState } from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const CheckoutForm = ({price}) => {

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError]= useState(); 
  const [clientSecret, setClientSecret] = useState("");


  useEffect(()=>{
    axiosSecure.post(`/create-payment-intent`,{price})
    .then((res)=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  },[price, axiosSecure])


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

      useEffect(()=>{

      },[])

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
          <button className='px-5 py-2 bg-black text-white text-base font-medium rounded-md mt-5' type="submit" disabled={!stripe || !clientSecret}>Pay</button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm