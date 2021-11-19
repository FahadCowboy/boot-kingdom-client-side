import React, { useState } from 'react';

const MakeAdmin = () => {
   const [email, setEmail] = useState('')
   const handleEmail = e => {
      const email = e.target.value
      setEmail(email)
   }

   const handleSubmit = e => {
      e.preventDefault()
      const admin = { email }
      fetch('http://localhost:4000/users/admin', {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(admin)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      e.target.reset()
   }

   return ( 
      <div className="container d-flex justify-content-center align-items-center" style={{}}>
         <div>
            <h2 className="text-center mb-4">Make someone admin</h2>
            {/* {
               loader?
               <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
               </button>
               : */}
            <form onSubmit={handleSubmit} className="" style={{ maxWidth: "500px", width: '400px', padding: "3rem 1rem", backgroundColor: "", border: '1px solid #00000033', borderRadius: "5px"}}>
               <div className="form-floating mb-3 w-100">
                  <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputImage" placeholder="Admin email"/>
                  <label htmlFor="exampleInputImage" className="form-label">Admin email</label>
               </div>
               <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-dark">Make Admin</button>
               </div>
               
            </form>
            {/* } */}
         </div>
      </div>
   );
};

export default MakeAdmin;