import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Footer = () => {
   const {user} = useAuth()
   return (
      <div className="mt-5 bg-dark" style={{width: "100%"}}>
         <div className="container">
            <div className="text-white d-flex justify-content-between align-items-center py-4">
               <p className="m-0">&copy; This web application is created by <span className="fw-bold">Mizanur Rahman</span></p>
               {
                  user? 
               <div className="d-flex flex-column align-items-start p-2 border rounded border-info">
                  <p className="mb-1 text-info">{user?.displayName}</p>
                  <small className="mb-0 text-small text-warning">{user?.email}</small>
               </div>
               :
               <div>
                  <NavLink to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></NavLink>
               </div> 
               }
            </div>
         </div>
      </div>
   );
};

export default Footer;