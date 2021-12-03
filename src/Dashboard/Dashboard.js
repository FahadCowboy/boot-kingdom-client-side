import React from 'react';
import useAuth from '../hooks/useAuth';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import {
   Switch,
   Route,
   Link,
   useRouteMatch,
   useLocation,
   useHistory
 } from "react-router-dom";
import AddProduct from '../component/AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from '../component/ManageOrders/ManageOrders';
import Orders from '../component/Orders/Orders';
import Feedback from '../Feedback/Feedback';
import ManageProducts from '../component/ManageProducts/ManageProducts';
import Payment from './Payment/Payment';
import Footer from '../component/Footer/Footer';

const Dashboard = () => {
   const location = useLocation()
   const history = useHistory()
   const {logout, isAdmin} = useAuth()
   let { path, url } = useRouteMatch();

   return (
      <div className="">
         <DashboardHeader></DashboardHeader>
         <div className="container-fluid">
            <div className="row" style={{minHeight: "74.5vh"}}>

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
               <div className="position-sticky pt-3 text-dark">

                  <ul className="nav flex-column">
                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold active" aria-current="page" to="/home">
                           Go to Home
                        </Link>
                     </li>
                  {
                     isAdmin? 
                     <>
                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/manage-orders`}>
                           Manage Orders
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/add-product`}>
                           Add Product
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/manage-products`}>
                           Manage Products
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/make-admin`}>
                          Make Admin
                        </Link>
                     </li>
                     </>
                     
                     :

                     <>
                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/payment`}>
                           Payment
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/orders`}>
                           Orders
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold" to={`${url}/feedback`}>
                           Feedback
                        </Link>
                     </li>
                     </>
                  }
                  </ul>
                  <hr />
                  <div className="navbar-nav">
                     <div className="nav-item text-nowrap d-flex flex-column">
                        <button onClick={() => logout(location, history)} className="px-3 btn btn-dark">Log out</button>
                     </div>
                  </div>
               </div>
            </nav>

               <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h1 className="h2">Dashboard</h1>
                  </div>
                  
                  <div>

                     <Switch>
                        <Route exact path={path}>
                           <div></div>
                        </Route>
                        <Route path={`${path}/orders`}>
                           <Orders></Orders>
                        </Route>
                        <Route path={`${path}/manage-orders`}>
                           <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/add-product`}>
                           <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/feedback`}>
                           <Feedback></Feedback>
                        </Route>
                        <Route path={`${path}/payment/:id`}>
                           <Payment></Payment>
                        </Route>
                        <Route path={`${path}/make-admin`}>
                           <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manage-products`}>
                           <ManageProducts></ManageProducts>
                        </Route>
                     </Switch>
                  </div>
                        

               </main>


            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Dashboard;