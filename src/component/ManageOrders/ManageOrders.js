import React, { useEffect, useState } from 'react';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Home/Header/Header';


const ManageOrders = () => {
   const [orders, setOrders] = useState([])
   const [updatedOrder, setUpdatedOrder] = useState({})


   useEffect(() => {
      fetch(`https://boot-kingdom.herokuapp.com/orders`)
      .then(res => res.json())
      .then(data => setOrders(data))
   }, [])

   useEffect(() => {
      setUpdatedOrder(updatedOrder)
   }, [updatedOrder])

   const handleOrderDelete = id => {
      const isAgreeToDelete = window.confirm('Are you agree to cancell this order?')
      if(isAgreeToDelete){
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

   const handleOrderConfirm = id => {
      const foundOrder = orders.find(order => order._id === id)
      foundOrder.orderStatus = true
      fetch(`https://boot-kingdom.herokuapp.com/orders/${id}`, {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(foundOrder)
      })
      .then(res => res.json())
      .then(data => {
         if(data.modifiedCount === 1){
            // const updateOrder = orders.find(order => order._id === id)
            setUpdatedOrder(foundOrder)
            console.log(data.modifiedCount)
         }
         // console.log(data)
      })
      console.log(foundOrder)
   }



   console.log(updatedOrder)

   return (
      <>
      { orders.length === 0 ? 
         <div className="sweet-loading loader-parent">
            {
               orders.length === 0 && 
                  <div className="text-center loader-parent">
                     <h2 className="text-secondary">Cart is empty!</h2>
                  </div>
               
            }
         </div> 
         :

      <>
      <div className="container d-flex flex-column align-items-center pb-5">
         <h2 className="pb-5 text-secondary text-center">Manage all the orders</h2>
         {
            orders.map(order => (
               <div key={order._id} className="card mb-3 border-0" style={{maxWidth: "700px"}}>
                  <div className="row g-0 rounded" style={{border:"1px solid #e9d4cd"}}>
                     <div className=" col-12 col-md-4 d-flex justify-content-center align-items-center">
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
                                    <span className="text-danger"> Pending <FontAwesomeIcon className="text-danger mt-2" icon={faExclamationCircle}/></span>
                                 } 
                              </p>
                        </div>
                        <div className="ms-3 me-3 mb-3 d-flex justify-content-between align-items-center">
                           <div>
                              <h5 className="m-0 fs-5 text-muted">{order.price} ৳</h5>
                           </div>
                           <div className="d-flex">
                              { 
                                 !order.orderStatus &&
                                 <p className="mb-0"><button onClick={() => handleOrderConfirm(order._id)} className="btn btn-sm fw-bold btn-info">Confirm</button></p>
                              }
                              <button onClick={() => handleOrderDelete(order._id)} type="button" className="btn btn-outline-danger btn-sm fw-bold ms-2">Cancel</button>
                           </div>
                        </div>
                        {/* <div className="ms-auto me-3 mb-3 d-flex justify-content-end align-items-center">
                           { order.orderStatus === true?
                              <p className="m-0 me-3">Shipped <FontAwesomeIcon className="text-info mt-2" icon={faCheckCircle}/></p>
                              :
                              <button onClick={() => handleOrderConfirm(order._id)} type="button" className="btn btn-outline-info btn-sm fw-bold me-2">Confirm</button>

                           }
                           <button onClick={() => handleOrderDelete(order._id)} type="button" className="btn btn-outline-danger btn-sm fw-bold">Cancel</button>
                        </div> */}
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
      </>
      }
      </>
   );
};



export default ManageOrders;