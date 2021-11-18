import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const DashboardSidebar = () => {
   const {logout} = useAuth()
   return (
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 text-dark">
         <ul className="nav flex-column">
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold active" aria-current="page" to="/home">
                  Home
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold" to="#">
                  Orders
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold" to="#">
                  Products
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold" to="#">
                  Customers
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold" to="#">
                  Reports
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-dark fw-bold" to="#">
                  Integrations
               </NavLink>
            </li>
         </ul>
         <hr />
         <div className="navbar-nav">
            <div className="nav-item text-nowrap d-flex flex-column">
               <button onClick={logout} className="px-3 btn btn-dark">Log out</button>
            </div>
         </div>
      </div>
   </nav>
   );
};

export default DashboardSidebar;