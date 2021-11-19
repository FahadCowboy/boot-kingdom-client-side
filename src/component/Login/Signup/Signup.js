import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
   const [userData, setUserData] = useState({})
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [retypePassword, setRetypePassword] = useState('')

   const history = useHistory()
   const {registerUser, loader} = useAuth()

   const handleName = e => {
      const value = e.target.value
      setName(value)
   }

   const handleEmail = e => {
      const value = e.target.value
      setEmail(value)
   }

   const handlePassword = e => {
      const value = e.target.value
      setPassword(value)
   }

   const handleRetypePassword = e => {
      const value = e.target.value
      setRetypePassword(value)
   }

   const handleSubmit = e => {
      e.preventDefault()
      if (password === retypePassword){
         console.log(name, email, password)
         registerUser(name, email, password, history)
      } else {
         alert('Password did not match')
         return
      }
      e.target.reset()
   }

   return (
      <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
         <div>
            <h2 className="text-center mb-4">Sign-Up</h2>
            {
               loader?
               <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
               </button> :
            <form onSubmit={handleSubmit} className="" style={{ maxWidth: "500px", width: '400px', padding: "3rem 1rem", backgroundColor: "", border: '1px solid #00000033', borderRadius: "5px"}}>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                  <input onBlur={handleName} type="text" className="form-control w-100" id="exampleInputName" placeholder="Name"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input onChange={handleEmail} type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputPassword1" className="form-label">Retype Password</label>
                  <input onBlur={handleRetypePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Retype Password"/>
               </div>
               <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">Sign-UP</button>
                  <NavLink to="/login">Already have an account?</NavLink>
               </div>
               
            </form>
            }
         </div>
      </div>
   );
};

export default Signup;