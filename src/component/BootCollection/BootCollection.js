import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Home/Header/Header';

const BootCollection = () => {
   const [boots, setBoots] = useState([])
   useEffect(() => {
      fetch('http://localhost:4000/boots')
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setBoots(data)
      })
   }, [])
   return (
      <div>
         <Header></Header>
         <div className="container">
            <h1 className="text-primary mt-5"><span className="fs-1 text-warning">&spades;</span>Whole Collection</h1>
            <div className="row g-4">
               {
                  boots.map(boot => (
                     <div key={boot._id} className="col col-12 col-md-6 col-lg-6">
                        <div className="card h-100">
                           <img src={boot.image} className="card-img-top d-block mx-auto w-75" alt="..."/>
                           <div className="card-body">
                              <h4 className="card-title text-dark">{boot.name}</h4>
                              <p>{boot.description}</p>
                              <h5 className="card-text text-secondary">{boot.price} <span>৳</span></h5>
                           </div>
                           <div className="card-footer border-0 bg-transparent">
                              <button className="btn btn-primary">View Details</button>
                              <NavLink to={`/place-order/${boot._id}`}>
                                 <button className="btn btn-outline-info ms-3">Grab it <span>+</span></button>
                              </NavLink>
                              
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

export default BootCollection;