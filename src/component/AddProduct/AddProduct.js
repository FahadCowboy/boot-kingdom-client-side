import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Home/Header/Header';
import useAuth from '../../hooks/useAuth';

const AddProduct = () => {
   const [userData, setUserData] = useState({})
   const [name, setName] = useState('')
   const [image, setImage] = useState('')
   const [price, setPrice] = useState('')
   const [category, setCategory] = useState('')
   const [description, setDescription] = useState('')

   const {registerUser, loader} = useAuth()

   const handleName = e => {
      const value = e.target.value
      setName(value)
   }

   const handleImage = e => {
      const value = e.target.value
      setImage(value)
   }

   const handlePrice = e => {
      const value = e.target.value
      setPrice(value)
   }

   const handleCategory = e => {
      const value = e.target.value
      setCategory(value)
   }

   const handleDescription = e => {
      const value = e.target.value
      setDescription(value)
   }

   const handleSubmit = e => {
      e.preventDefault()
         // console.log(email, password)
      const newProduct = {
         name,
         image,
         description,
         price,
         collection: category
      }

      console.log(newProduct)
      
      fetch('http://localhost:4000/boots', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      })
      .then(res => res.json())
      .then(data => console.log(data))

      e.target.reset()
   }

   return (
      <>
      <div className="container d-flex justify-content-center align-items-center" style={{}}>
         <div>
            <h2 className="text-center mb-4">Add product</h2>
            {
               loader?
               <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
               </button> :
            <form onSubmit={handleSubmit} className="" style={{ maxWidth: "500px", width: '400px', padding: "3rem 1rem", backgroundColor: "", border: '1px solid #00000033', borderRadius: "5px"}}>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputProductName" className="form-label">Product Name</label>
                  <input onChange={handleName} type="text" className="form-control w-100" id="exampleInputProductName" placeholder="Product Name"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputImage" className="form-label">Image URL</label>
                  <input onChange={handleImage} type="text" className="form-control" id="exampleInputImage" placeholder="Image URL"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                  <input onChange={handlePrice} type="number" className="form-control" id="exampleInputPrice" placeholder="Price"/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleCategory" className="form-label">Category  <span className="text-success" style={{fontSize: "0.7rem"}}>(Normal is selected by default)</span></label>
                  <select onChange={handleCategory} className="form-select" aria-label="Default select example" placeholder="Select category" required>
                     <option selected>Select category</option>
                     <option value="normal">Normal</option>
                     <option value="exclusive">Exclusive</option>
                  </select>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                  <textarea onChange={handleDescription} className="form-control" id="exampleInputDescription" rows="5" placeholder="Description"></textarea>
               </div>
               <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">Add</button>
               </div>
               
            </form>
            }
         </div>
      </div>
      </>
   );
};

export default AddProduct;