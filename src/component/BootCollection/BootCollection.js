import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BootDetails from '../BootDetails/BootDetails';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';

const BootCollection = () => {
   const [boots, setBoots] = useState([])
   const [boot, setBoot] = useState({})
   useEffect(() => {
      fetch('https://boot-kingdom.herokuapp.com/boots')
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setBoots(data)
      })
   }, [])

   const handleDetailsModal = id => {
      const filteredBoot = boots.find(boot => id === boot._id)
      setBoot(filteredBoot)
   }

   return (
      <div>
         <Header></Header>
         <div className="container">
            <h1 className="text-primary mt-5"><span className="fs-1 text-warning">&spades;</span>Whole Collection</h1>
            <div className="row g-4">
               {
                  boots.map(boot => (
                     <div key={boot._id} className="col col-12 col-md-12 col-lg-4">
                        <div className="card h-100">
                           <div className="py-4">
                              <img src={boot.image} className="card-img-top d-block mx-auto w-75" alt=""/>
                           </div>
                           
                           <div className="card-body">
                              <h4 className="card-title text-dark">{boot.name}</h4>
                              <h5 className="card-text text-secondary">{boot.price} <span>৳</span></h5>
                           </div>
                           <div className="d-flex justify-content-end card-footer border-0 bg-transparent pb-4">
                              <button onClick={() => handleDetailsModal(boot._id)} className="btn btn-dark fw-bold"  data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                              <Link to={`/place-order/${boot._id}`}>
                                 <button className="btn btn-outline-primary fw-bold ms-3">Grab it <span>+</span></button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
         <Footer></Footer>
         <BootDetails boot={boot}></BootDetails>
      </div>
   );
};


export default BootCollection;