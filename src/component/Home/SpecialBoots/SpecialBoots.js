import React, { useEffect, useState } from 'react';

const SpecialBoots = () => {
   const [boots, setBoots] = useState([])
   useEffect(() => {
      fetch('http://localhost:4000/boots')
      .then(res => res.json())
      .then(data => {
         console.log(data)
         const exclusive = data.filter(boot => boot.collection === "exclusive")
         let exclusiveSix = []
         for (let i = 0; i < 6; i++) {
            exclusiveSix.push(exclusive[i]) 
         }

         setBoots(exclusiveSix)
      })
   }, [])
   console.log(boots)
   return (
      <div className="container">
         <h1 className="text-primary mt-5"><span className="fs-1 text-warning">&spades;</span> Exclusive collection</h1>
         <div className="row g-4">
            {
               boots.map(boot => (

                  <div key={boot._id} className="col col-12 col-md-6 col-lg-4">
                     <div className="card h-100">
                        <img src={boot.image} className="card-img-top d-block mx-auto w-75" alt="..."/>
                        <div className="card-body">
                           <h4 className="card-title text-dark">{boot.name}</h4>
                           <p>{boot.description}</p>
                           <h5 className="card-text text-secondary">{boot.price} <span>৳</span></h5>
                        </div>
                        <div className="card-footer border-0 bg-transparent">
                           <button className="btn btn-primary">View Details</button>
                           <button className="btn btn-outline-info ms-3">Grab it <span>+</span></button>
                        </div>
                        </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default SpecialBoots;