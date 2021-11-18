import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';

const PlaceOrder = () => {
   const { id } = useParams()
   const { user } = useAuth()
   const [boot, setBoot] = useState({})
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   const [name, setName] = useState('')

console.log(name)
   useEffect(() => {
      fetch(`http://localhost:4000/boots/${id}`)
      .then(res => res.json())
      .then(data => setBoot(data))
   }, [])

   const handlePhone = e => {
      const phone = e.target.value
      setPhone(phone)
   }

   const handleAddress = e => {
      const address = e.target.value
      setAddress(address)
   }

   const handleName = e => {
      const name = e.target.value
      console.log(name)
      setName(name)
   }

   const handleOrder = e => {
      e.preventDefault()
      console.log(name)
      const order = {
         bootName: boot.name,
         email: user.email,
         name: user.displayName,
         phone,
         address,
         image: boot.image,
         orderStatus: false
      }
      console.log(order)
      fetch('http://localhost:4000/orders', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      console.log(name)
      console.log(user)
   }

   return (
      <>
      <Header></Header>
      <div className="container">
         <div className="row mx-0 my-5 rounded book-now-wrapper">
            <div className="card place-detailes-wrap mb-3 col-12 col-md-12 col-lg-8">
               <img src={boot.image} className="card-img-top w-50 mx-auto" alt="..."/>
               <div className="card-body">
                  <h2 className="card-title">{boot.name}</h2>
                  <p className="card-text">{boot.description}</p>
               </div>
            </div>
            <form onSubmit={handleOrder} className="col-12 col-md-12 py-5 col-lg-4 text-center theme-bg d-flex flex-column justify-content-center rounded-end">
               <h2 className="text-white mb-5">Book a cottage</h2>
               <div>
                  <div className="form-floating pb-3">
                     <input type="text" className="form-control mb-4" id="placeName" readOnly value={boot.name || ''} placeholder="Drop place name"/>
                     <label htmlFor="placeName" className="form-label">Boot name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input onchange={handleName} type="text" className="form-control mb-4" id="yourName" readOnly value={user.displayName || ''} placeholder="Drop your name"/>
                     <label htmlFor="yourName" className="form-label">Your name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="email" className="form-control mb-4" id="yourEmail" placeholder="Drop your email" readOnly value={user.email || ''}/>
                     <label htmlFor="yourEmail" className="form-label">Email</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input onChange={handlePhone} type="text" className="form-control mb-4" id="phone" placeholder="Drop your address"/>
                     <label htmlFor="phone" className="form-label">Phone</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input onChange={handleAddress} type="text" className="form-control mb-4" id="address" placeholder="Drop your address"/>
                     <label htmlFor="address" className="form-label">Address</label>
                  </div>
                  <div className="form-floating pb-3">
                     {/* <Link to="/home"> */}
                        <input type="submit" value="Book +" className="btn btn-primary"/>
                        {/* </Link> */}
                     
                  </div>
               </div>
            </form>
         </div>
      </div>
      </>
   );
};

export default PlaceOrder;