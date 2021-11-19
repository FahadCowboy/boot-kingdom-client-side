import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
   const {user, loader} = useAuth()
   if(loader){
     return(
      <button className="btn btn-primary" type="button" disabled>
         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
      </button>
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