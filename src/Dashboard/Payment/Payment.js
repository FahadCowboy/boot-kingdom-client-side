import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JxzO8KxuzmLyJh7d5MHsiztoDEwUyU0QPF894cnp4v0RHRtU2GNkqU2haGiFuIanjaoJYJLFQyGhRheIjqnUyaz00JwKpAiUo');

const Payment = () => {
   const {id} = useParams()
   const [order, setOrder] = useState({})
   useEffect(() => {
      fetch(`https://boot-kingdom.herokuapp.com/orders/${id}`)
      .then(res => res.json())
      .then(data => setOrder(data))
   }, [])
   return (
      <div className="d-flex justify-content-center align-items-center"  style={{}}>
         <div className="col-12 col-lg-6">
         <h2 className="text-center text-secondary mb-5">Pay for this order</h2>

            <div>
               <h4>{order.bootName}</h4>
               <p>Email: {order.email}</p>
               <h5>Payable amount: ${order.price}</h5>
            </div>
            <div>
               {
                  order?.price && 
                  <Elements stripe={stripePromise}>
                     <CheckoutForm
                        orderData={order}
                     />
                  </Elements>
               }
            </div>
         </div>
      </div>
   );
};

export default Payment;