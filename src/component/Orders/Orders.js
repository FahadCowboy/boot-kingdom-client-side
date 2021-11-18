import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';



const Orders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])

   useEffect(() => {
      fetch(`http://localhost:4000/orders/${user.email}`)
      .then(res => res.json())
      .then(data => { 
         console.log(data)
         setOrders(data)
      })
   }, [])

   
   
   const handleOrderDelete = id => {
      const isAgreeToDelete = window.confirm('Are you agree to cancell this order?')
      if(isAgreeToDelete){
         console.log(id)
         fetch(`http://localhost:4000/orders/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount === 1) {
               const filterdOrders = orders.filter(order => order._id !== id)
               setOrders(filterdOrders)
               // loading.length === 0 && setLoading(false)  
            }
         })
      }
   }
   // console.log(user.email)

   
   return (
      <>
      <Header></Header>
      <div className="container d-flex flex-column align-items-center my-5 py-5">
         <h1 className="orders-headding pb-4 text-center theme-text">Orders you have placed</h1>
         {
            orders.map(order => (
               <div key={order._id} className="card mb-3 border-0" style={{maxWidth: "700px"}}>
                  <div className="row g-0 rounded" style={{border:"1px solid #e9d4cd"}}>
                     <div className=" col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <img src={order.image} className="w-75 w-lg-50 rounded-start" alt="..."/>
                     </div>
                     <div className="col-12 col-md-8 text-dark rounded-end d-flex flex-column justify-content-between" style={{backgroundColor:"#e9d4cd"}}>
                        <div className="card-body pb-0">
                           <h5 className="card-title mb-1 ">{order.bootName}</h5>
                           <p className="card-text mb-1">{order.name}</p>
                           <p className="card-text mb-1 d-none d-sm-block">{order.email}</p>
                           <p className="card-text mb-1 d-none d-sm-block">{order.phone}</p>
                           <p className="card-text mb-1 d-none d-sm-block">{order.address}</p>
                        </div>
                        <div className="ms-auto me-3 mb-3 d-flex justify-content-end align-items-center">
                           {
                              order.orderStatus === true ?
                              <p className="m-0 me-3">Confirmed <FontAwesomeIcon className="text-info mt-2" icon={faCheckCircle}/>
                              </p>
                              :
                              <p className="m-0 me-2">Pending...</p>
                           }
                           <button onClick={() => handleOrderDelete(order._id)} type="button" className="btn btn-outline-danger btn-sm fw-bold">Cancel</button>
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