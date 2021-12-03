import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Home/Header/Header';

const ManageProducts = () => {
   
   const [boots, setBoots] = useState([])
   useEffect(() => {
      fetch('https://boot-kingdom.herokuapp.com/boots')
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setBoots(data)
      })
   }, [])

   useEffect(() => {
      setBoots(boots)
   }, [boots])

   const handleDeleteProduct = id => {
      const isAgreeToDelete = window.confirm('Are you agree to cancel this order?')
      if(isAgreeToDelete){
         fetch(`https://boot-kingdom.herokuapp.com/boots/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount === 1) {
               const filterdOrders = boots.filter(order => order._id !== id)
               setBoots(filterdOrders)
            }
         })
      }
   }

   return (
      <div>
         <div className="container">
            <h2 className="text-secondary mb-5 text-center">Manage Products</h2>
            <div className="row g-4">
               {
                  boots.map(boot => (
                     <div key={boot._id} className="col col-12 col-md-12 col-lg-4">
                        <div className="card h-100">
                           <div className="py-3">
                              <img src={boot.image} className="card-img-top d-block mx-auto w-75" alt="..."/>
                           </div>
                           
                           <div className="card-body">
                              <h4 className="card-title text-dark">{boot.name}</h4>
                              <h5 className="card-text text-secondary">{boot.price} <span>৳</span></h5>
                           </div>
                           <div className="card-footer border-0 bg-transparent d-flex justify-content-end">
                              <button onClick={() => handleDeleteProduct(boot._id)} className="btn btn-outline-danger">Delete</button>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default ManageProducts;