import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Orders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])

   useEffect(() => {
      fetch(`https://boot-kingdom.herokuapp.com/myOrders/${user.email}`, {
         method: 'GET',
         headers: {
            "content-type": "application/json"
         }
      })
      .then(res => res.json())
      .then(data => {
         setOrders(data)
         console.log(data)
         console.log(user.email)
      })
      .catch(error => console.log(error))
   }, [])

   
   
   const handleOrderDelete = id => {
      const isAgreeToDelete = window.confirm('Are you agree to cancell this order?')
      if(isAgreeToDelete){
         console.log(id)
         fetch(`https://boot-kingdom.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount === 1) {
               const filterdOrders = orders.filter(order => order._id !== id)
               setOrders(filterdOrders)
            }
         })
      }
   }

   
   return (
      <>
      <div className="container d-flex flex-column align-items-center pb-5">
         <h2 className="text-center text-secondary mb-5">Orders you have placed</h2>
         {
            orders.map(order => (
               <div key={order._id} className="card mb-3 border-0" style={{maxWidth: "700px"}}>
                  <div className="row g-0 rounded" style={{border:"1px solid #e9d4cd"}}>
                     <div className="p-4 col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <img src={order.image} className="w-75 rounded-start" alt="..."/>
                     </div>
                     <div className="col-12 col-md-8 text-dark rounded-end d-flex flex-column justify-content-between" style={{backgroundColor:"#e9d4cd"}}>
                        <div className="card-body pb-0">
                           <h5 className="card-title mb-1 ">{order.bootName}</h5>
                           <p className="card-text mb-1 d-none d-sm-block"><span className="fw-bold">Email:</span> <span>{order.email}</span></p>
                           <p className="card-text mb-1 d-none d-sm-block"><span className="fw-bold">Phone:</span> <span>{order.phone}</span></p>
                           <p className="card-text mb-1 d-none d-sm-block"><span className="fw-bold">Address:</span> {order.address}</p>
                              <p className="m-0 me-3"><span className="fw-bold">Status:</span> 
                                 {order.orderStatus ? 
                                    <span> Shipped <FontAwesomeIcon className="text-success mt-2" icon={faCheckCircle}/></span>
                                 :
                                    <span className=""> Pending <FontAwesomeIcon className="text-danger mt-2" icon={faExclamationCircle}/></span>
                                 } 
                              </p>
                        </div>
                        <div className="ms-3 me-3 mb-3 d-flex justify-content-between align-items-center">
                           <div>
                              <h5 className="m-0 fs-5 text-muted">{order.price} ৳</h5>
                           </div>
                           <div className="d-flex">
                              { order.payment ? 
                                 <span> Paid <FontAwesomeIcon className="text-success mt-2" icon={faCheckCircle}/></span> 
                              :
                                 <Link to={`/dashboard/payment/${order._id}`} className="btn btn-sm fw-bold btn-dark">Pay</Link>
                              }
                              <button onClick={() => handleOrderDelete(order._id)} type="button" className="btn btn-outline-danger btn-sm fw-bold ms-2">Cancel</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
      </>
   );
};

export default Orders;