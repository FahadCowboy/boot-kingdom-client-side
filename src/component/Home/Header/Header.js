import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   const {user, logout, loader} = useAuth()

   return (
      <header className=" bg-dark text-white">
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
               <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <h1 className="text-white m-0 fs-3">Boot Kingdom</h1>
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse flex-grow-0" id="navbarScroll">
                  <div className="text-end d-md-flex align-items-center">
                     <div className="d-lg-flex w-100 1-md-100 align-items-center">
                        <Link to="/boot-collection" className="px-2 text-decoration-none text-white me-3 nav-link">Boot Collection</Link>
                     </div>
                     { user?
                        <div className="d-flex align-items-center justify-content-between" style={{minWidth: "368px"}}>
                           <div className="d-flex flex-column align-items-start p-2 border rounded border-info">
                              <p className="mb-1 text-info">{user.displayName}</p>
                              <small className="mb-0 text-small text-warning">{user.email}</small>
                           </div>
                           <div className=" align-items-center mvb-2">
                              <button onClick={logout} className="btn btn-outline-info me-2 m1">Log Out</button>
                              <button className="btn btn-outline-warning m-1"><NavLink to="/dashboard" className="text-decoration-none text-warning">Dashboard</NavLink></button>
                           </div>

                        </div>

                     :
                        <div>
                           <NavLink to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></NavLink>
                        </div> 
                     }
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};
export default Header;