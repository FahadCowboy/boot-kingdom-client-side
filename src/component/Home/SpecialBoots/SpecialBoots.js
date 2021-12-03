import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BootDetails from '../../BootDetails/BootDetails';

const SpecialBoots = () => {
   const [boots, setBoots] = useState([])
   const [boot, setBoot] = useState({})
   useEffect(() => {
      fetch('https://boot-kingdom.herokuapp.com/boots')
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

   const handleDetailsModal = id => {
      const filteredBoot = boots.find(boot => id === boot._id)
      setBoot(filteredBoot)
   }
   console.log(boot)

   console.log(boots)
   return (
      <>
      <div className="container">
         <h1 className="text-secondary mt-5"><span className="fs-1 text-warning">&spades;</span> Exclusive collection</h1>
         <div className="row g-4 my-4">
            {
               boots.map(boot => (

                  <div key={boot._id} className="col col-12 col-md-6 col-lg-4">
                     <div className="card h-100 py-4">
                        <img src={boot.image} className="card-img-top d-block mx-auto w-75" alt="..."/>
                        <div className="card-body">
                           <h4 className="card-title text-dark">{boot.name}</h4>
                           <h5 className="card-text text-secondary">{boot.price} <span>৳</span></h5>
                        </div>
                        <div className="d-flex justify-content-end card-footer border-0 bg-transparent">
                           <button onClick={() => handleDetailsModal(boot._id)} type="button" class="btn btn-dark fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                           <NavLink to={`/place-order/${boot._id}`}>
                                 <button className="btn btn-outline-primary ms-3 fw-bold">Grab it <span>+</span></button>
                           </NavLink>
                        </div>
                        </div>
                  </div>
               ))
            }
         </div>
      </div>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button> */}


      <BootDetails 
         boot={boot}
      ></BootDetails>
   </>
   );
};

export default SpecialBoots;