import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   const [userData, setUserData] = useState({})

   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const location = useLocation()
   const history = useHistory()

   const {login} = useAuth()

   const handleEmail = e => {
      const value = e.target.value
      setEmail(value)
   }

   const handlePassword = e => {
      const value = e.target.value
      setPassword(value)
   }


   const handleSubmit = e => {
      e.preventDefault()
      login(email, password, location, history)
      e.target.reset()
   }


   return (
      <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
         <div>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="" style={{ maxWidth: "500px", width: '400px', padding: "3rem 1rem", backgroundColor: "", border: '1px solid #00000033', borderRadius: "5px"}}>
               <div class="mb-3 w-100">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input onChange={handleEmail} type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
               </div>
               <div class="mb-3 w-100">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input onChange={handlePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
               </div>
               <div className="d-flex justify-content-between">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <NavLink to="/signup">New user?</NavLink>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;