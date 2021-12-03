import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.png'

const DashboardHeader = () => {
   return (
      <header className="container-fluid navbar navbar-dark sticky-top bg-dark p-0 d-flex flex-lg-column shadow px-2">
               <Link style={{maxHeight: "40px", maxWidth: "237px"}} to="/" className="d-flex align-items-center my-2 text-white text-decoration-none">
                  <img className="w-100 h-100" src={logo} alt="" />
               </Link>

            <button className="navbar-toggler d-md-none position-static" style={{}} type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
               <FontAwesomeIcon className="text-info mt-2" icon={faBars}/>
            </button>



      </header>
   );
};

export default DashboardHeader;