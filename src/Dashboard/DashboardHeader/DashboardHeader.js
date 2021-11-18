import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
   return (
      <header className="navbar navbar-dark sticky-top bg-dark p-0 d-flex flex-lg-column shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 py-3" to="/home"><h1 className="text-white m-0 fs-3">Boot Kingdom</h1></Link>

            <button className="navbar-toggler position-absolute d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
               <FontAwesomeIcon className="text-info mt-2" icon={faBars}/>
            </button>



      </header>
   );
};

export default DashboardHeader;