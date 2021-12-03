import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.png'

const BootDetails = ({isModalOpen, setIsModalOpen, boot}) => {
   console.log(isModalOpen, setIsModalOpen, boot)

   
   return (
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
               <div className="modal-header py-0 border-0 bg-dark">
                  <Link style={{maxHeight: "40px", maxWidth: "237px"}} to="/" className="d-flex align-items-center my-2 text-white text-decoration-none">
                     <img className="w-100 h-100" src={logo} alt="" />
                  </Link>
                  <Link to="" className="text-white fs-3 pe-2" data-bs-dismiss="modal" aria-label="Close">
                     <FontAwesomeIcon icon={faTimesCircle}/>
                  </Link>
               </div>
               <div className="modal-body hideScrollbar">
                  <div>
                     <div className="p-3 row justify-content-center">
                        <img className="
                        col-9 col-lg-6" src={boot.image} alt="" />
                     </div>
                     <h2>{boot.name}</h2>
                     <p>{boot.description}</p>
                     <h4 className="text-muted">{boot.price} ৳</h4>
                  </div>
               </div>
            </div>
         </div>
         </div>
   );
};

export default BootDetails;