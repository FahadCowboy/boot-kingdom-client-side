import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
   const {user, loader} = useAuth()
   if(loader){
     return(
       <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <button className="btn" type="button" disabled>
            <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>Loading...
          </button>
       </div>

     )
   }
   return (
      <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
   );
};

export default PrivateRoute;