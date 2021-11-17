import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   const {user, logout, loader} = useAuth()
   return (
      <header class="py-2 bg-dark text-white">
         <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
               <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <h1 className="text-white m-0 fs-3">Boot Kingdom</h1>
               </Link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse flex-grow-0" id="navbarScroll">
                  {/* <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li class="nav-item">
                     <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="#">Link</Link>
                  </li>
                  <li class="nav-item dropdown">
                     <Link class="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Link
                     </Link>
                     <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><Link class="dropdown-item" to="#">Action</Link></li>
                        <li><Link class="dropdown-item" to="#">Another action</Link></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                     </ul>
                  </li>
                  <li class="nav-item">
                     <Link to="#" class="nav-link disabled">Link</Link>
                  </li>
                  </ul> */}
                  <div class="text-end d-md-flex">
                     <div className="">
                        <Link to="/boot-collection" className="px-2 text-decoration-none text-white me-3 nav-link">Boot Collection</Link>
                     </div>
                     { user?
                        <div>
                           <button onClick={logout} className="btn btn-outline-info btn-sm">Log Out</button>
                        </div>

                     :
                        <div>
                           <Link to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></Link>
                        </div> 
                     }
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

{/* <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
<h1 className="text-white m-0 fs-3">Boot Kingdom</h1>
</Link> */}

{/*  */}
export default Header;