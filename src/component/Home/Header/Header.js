import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   const {user, logout, loader} = useAuth()
   return (
      <header className="py-2 bg-dark text-white">
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
               <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <h1 className="text-white m-0 fs-3">Boot Kingdom</h1>
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse flex-grow-0" id="navbarScroll">
                  <div className="text-end d-md-flex">
                     <div className="d-lg-flex w-100 1-md-100">
                        <Link to="/boot-collection" className="px-2 text-decoration-none text-white me-3 nav-link">Boot Collection</Link>
                        <Link to="/orders" className="px-2 text-decoration-none text-white me-3 nav-link">Orders</Link>
                        <Link to="/manage-orders" className="px-2 text-decoration-none text-white me-3 nav-link">Manage Orders</Link>
                        <Link to="/add-product" className="px-2 text-decoration-none text-white me-3 nav-link">Add Product</Link>
                        <Link to="/feedback" className="px-2 text-decoration-none text-white me-3 nav-link">Feedback</Link>
                        {/* <Link to="/feedback" className="px-2 text-decoration-none text-white me-3 nav-link">Feedback</Link> */}
                     </div>
                     { user?
                        <div>
                           <NavLink to="/dashboard">Dashboard</NavLink>
                           <button onClick={logout} className="btn btn-outline-info btn-sm">Log Out</button>
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