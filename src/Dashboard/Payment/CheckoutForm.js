import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import ButtonSpinner from '../../component/StyledComponents/ButtonSpinner/ButtonSpinner';

const CheckoutForm = ({orderData}) => {
   const {price, name, email, _id} = orderData
   const stripe = useStripe()
   const elements = useElements()
   const [error, setError] = useState('')
   const [success, setSuccess] = useState('')
   const [processing, setProcessing] = useState(false)
   const [clientSecret, setClientSecret] = useState('')

   useEffect(() => {
      fetch('https://boot-kingdom.herokuapp.com/create-payment-intent', {
         method: 'POST',
         headers: {
            'content-type' : 'application/json'
         },
         body: JSON.stringify({ price })
      })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(error => console.log(error))
   }, [price])

   const handleSubmit = async (e) => {
      e.preventDefault()
      if(!stripe || !elements){
         return
      }
      const card = elements.getElement(CardElement)
      if(card === null){
         return
      }

      setProcessing(true)

      const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
         card
      })
      if(error){
         console.log(error)
         setError(error.message)
         setSuccess('')
         setProcessing(false)
      } else{
         setError('')
         console.log(paymentMethod)
         e.target.reset()
      }

      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
         clientSecret,
         {
           payment_method: {
             card: card,
             billing_details: {
               name,
               email
             },
           },
         },
         
      );

      if(intentError){
         setError(intentError.message)
         setSuccess('')
         setProcessing(false)
      } else {
         setError('')
         console.log(paymentIntent)
         setSuccess('Payment process successful')
         setProcessing(false)

         const payment = {
            trx_id: paymentIntent.client_secret.slice('_secret')[0],
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4
         }
         
         fetch(`https://boot-kingdom.herokuapp.com/orders/payment/${_id}`, {
            method: 'PUT',
            headers: {
               "content-type": "application/json"
            },
            body: JSON.stringify(payment)
         })
         .then(res => res.json())
         .then(data => console.log(data))
      }
   }
   console.log(error)
   console.log(success)


   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="p-2 border rounded border-1-muted my-3">
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
            </div>
            
            <div className="d-flex align-items-center mb-3">
               { !processing ?
               <button className="btn btn-dark w-100" type="submit" disabled={!stripe || success}>
                  Pay <span className="text-warning"> {price}</span> USD
               </button>
               :
                  <ButtonSpinner></ButtonSpinner>
            }</div>
            
         </form>
         <div className="visibility-hidden" style={{ width: "100%", height: '8rem'}}>
            {
               error && <div className="alert alert-danger text-center">{error} 
                  <FontAwesomeIcon className="text-danger" icon={faExclamationCircle}/>
               </div>
            }
            {
               success && <div className="alert alert-success text-center" role="alert">{success} 
                  <FontAwesomeIcon className="text-success" icon={faCheckCircle}/>
               </div>
            }
         </div>
         
      </div>
   );
};

export default CheckoutForm;