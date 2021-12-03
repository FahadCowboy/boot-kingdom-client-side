import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AlertModal = ({successData}) => {
   const {bootName, success, body} = successData
   const [isSuccess, setIsSuccess] = useState('')
   
   useEffect(() => {
      setIsSuccess(success)
   }, [success])

   return (
      <div className="modal fade " id="exampleModalToggle" aria-hidden={!success} aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
         <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
               <div className="modal-header pe-2 py-0 border-0 bg-dark">
                  <Link t="" type="button" className="text-white ms-auto fs-3 pe-2" data-bs-dismiss="modal" aria-label="Close"><FontAwesomeIcon icon={faTimesCircle}/></Link>
               </div>
               <div className="modal-body py-4 mb-0">
                  { isSuccess ? 
                     <FontAwesomeIcon style={{fontSize: "5rem"}} className="text-success mx-auto d-block mb-3" icon={faCheckCircle}/>
                  :
                     <FontAwesomeIcon style={{fontSize: "5rem"}} className="text-danger mx-auto d-block mb-3" icon={faTimesCircle}/>
                  }
                  <p className="mb-1 text-justify">{body}</p> <span className="fw-bold d-inline">{bootName}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AlertModal;