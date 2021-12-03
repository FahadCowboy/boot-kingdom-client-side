import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';
import AlertModal from '../StyledComponents/AlertModal/AlertModal';

const PlaceOrder = () => {
   const { id } = useParams()
   const { user } = useAuth()
   const [boot, setBoot] = useState({})
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   const [name, setName] = useState('')
   const [successData, setSuccessData] = useState(false)

console.log(name)
   useEffect(() => {
      fetch(`https://boot-kingdom.herokuapp.com/boots/${id}`)
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
         price: boot.price,
         orderStatus: false
      }
      console.log(order)
      fetch('https://boot-kingdom.herokuapp.com/orders', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
         if(data.acknowledged){
            const popUpData = {
               success: data.acknowledged,
               header: "Order Placed",
               body: "You have successfully ordered",
               bootName: boot.name
            }
            setSuccessData(popUpData)
            e.target.reset()
         }
      })
      .catch(err => console.log(err))
      
      

   }
   return (
      <>
      <AlertModal successData={successData}></AlertModal>
      <Header></Header>
      <div className="container">
         <div className="row mx-0 my-5 rounded book-now-wrapper">
            <div className="card mb-3 py-3 col-12 col-md-12 col-lg-8">
               <div className="p-3 d-flex justify-content-center">
                  <img src={boot.image} className="card-img-top w-50 mx-auto" alt="..."/>
               </div>
               
               <div className="card-body">
                  <h2 className="card-title">{boot.name}</h2>
                  <p className="card-text">{boot.description}</p>
               </div>
            </div>
            <form onSubmit={handleOrder} className="col-12 col-md-12 col-lg-4 text-center theme-bg d-flex flex-column justify-content-center rounded-end">
               <h2 className="text-secondary mb-3">Place the order</h2>
               <div>
                  <div className="form-floating pb-2">
                     <input type="text" className="form-control mb-2" id="placeName" readOnly value={boot.name || ''} placeholder="Drop place name"/>
                     <label htmlFor="placeName" className="form-label">Boot name</label>
                  </div>
                  <div className="form-floating pb-2">
                     <input onBlur={handleName} type="text" className="form-control mb-2" id="yourName" readOnly value={user.displayName || ''} placeholder="Drop your name"/>
                     <label htmlFor="yourName" className="form-label">Your name</label>
                  </div>
                  <div className="form-floating pb-2">
                     <input type="email" className="form-control mb-2" id="yourEmail" placeholder="Drop your email" readOnly value={user.email || ''}/>
                     <label htmlFor="yourEmail" className="form-label">Email</label>
                  </div>
                  <div className="form-floating pb-2">
                     <input onBlur={handlePhone} type="number" className="form-control mb-2" id="phone" placeholder="Drop your address" required/>
                     <label htmlFor="phone" className="form-label">Phone</label>
                  </div>
                  <div className="form-floating pb-2">
                     <input onBlur={handleAddress} type="text" className="form-control mb-2" id="address" placeholder="Drop your address"  required/>
                     <label htmlFor="address" className="form-label">Address</label>
                  </div>
                  <div className="form-floating pb-2">
                     <input type="submit" value="Book +" className="btn btn-dark w-100"  data-bs-toggle="modal" href="#exampleModalToggle"/>
                  </div>
               </div>
            </form>
         </div>
      </div>
      </>
   );
};

export default PlaceOrder;