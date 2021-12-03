import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from './../../../logo.png'

const Header = () => {
   const {user, logout, loader} = useAuth()

   return (
      <header className=" bg-dark text-white">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
               <Link style={{maxHeight: "40px", maxWidth: "237px"}} to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <img className="w-100 h-100" src={logo} alt="" />
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse flex-grow-0" id="navbarScroll">
                  <div className="text-end d-flex flex-column flex-lg-row">
                     <div className="d-lg-flex w-100 1-md-100 align-items-center">
                        <Link to="/boot-collection" className="px-2 text-decoration-none text-white ms-3 nav-link">Boot Collection</Link>
                        { user &&
                           <div className=" align-items-center mvb-2">
                              <NavLink to="/dashboard" className="btn btn-outline-warning m-1 ms-3">Dashboard</NavLink>
                              <button onClick={logout} className="btn btn-outline-info ms-3 m1">Log Out</button>
                           </div> 
                        }
                        
                     </div>
                     { user &&
                        <div className="ms-3 d-flex align-items-center justify-content-end">
                           <div className="d-flex flex-column align-items-start ">
                              <p className="mb-1 text-info">{user.displayName}</p>
                              <small className="mb-0 text-small text-warning">{user.email}</small>
                           </div>
                        </div>
                     }
                     { !user &&
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