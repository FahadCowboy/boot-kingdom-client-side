import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AddProduct = () => {
   const [name, setName] = useState('')
   const [image, setImage] = useState(null)
   const [price, setPrice] = useState('')
   const [category, setCategory] = useState('')
   const [description, setDescription] = useState('')
   const [success, setSuccess] = useState('')

   const {registerUser, loader} = useAuth()

   const handleName = e => {
      const value = e.target.value
      setName(value)
   }

   const handleImage = e => {
      const value = e.target.files[0]
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
      const newProduct = new FormData()
      
   
         newProduct.append('name', name)
         newProduct.append('image', image)
         newProduct.append('description', description)
         newProduct.append('price', price)
         newProduct.append('collection', category)

      console.log(newProduct)
      
      fetch('https://boot-kingdom.herokuapp.com/boots', {
         method: 'POST',
         body: newProduct
      })
      .then(res => res.json())
      .then(data => {
         if(data.insertedId) {
            setSuccess('Product Added successfully.')
         }
      })
      .catch(error => console.log(error))

      e.target.reset()
   }

   console.log(image)

   return (
      <>
      <div className="container d-flex justify-content-center align-items-center" style={{}}>
         <div className="mb-5">
            <h2 className="text-center text-secondary mb-5">Add product</h2>
            {
               loader?
               <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
               </button> :
            <form onSubmit={handleSubmit} className="" style={{ maxWidth: "500px", width: '400px', padding: "2rem 1rem", backgroundColor: "", border: '1px solid #00000033', borderRadius: "5px"}}>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputProductName" className="form-label">Product Name</label>
                  <input onBlur={handleName} type="text" className="form-control w-100" id="exampleInputProductName" placeholder="Product Name" required />
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputImage" className="form-label">Upload Image</label>
                  <input onBlur={handleImage} type="file" className="form-control" id="exampleInputImage" placeholder="Upload Image" required/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                  <input onBlur={handlePrice} type="number" className="form-control" id="exampleInputPrice" placeholder="Price" required/>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleCategory" className="form-label">Category  <span className="text-success" style={{fontSize: "0.7rem"}}>(Normal is selected by default)</span></label>
                  <select onBlur={handleCategory} className="form-select" aria-label="Default select example" placeholder="Select category" required>
                     <option selected>Select category</option>
                     <option value="normal">Normal</option>
                     <option value="exclusive">Exclusive</option>
                  </select>
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                  <textarea onBlur={handleDescription} className="form-control" id="exampleInputDescription" rows="5" placeholder="Description" required></textarea>
               </div>
               <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-dark w-100">Add</button>
               </div>
               
            </form>
            }
            { success &&
               <div className="alert alert-success text-center mt-3">{success} 
                  <FontAwesomeIcon className="text-success" icon={faCheckCircle}/>
               </div>
            }
               
         </div>
      </div>
      </>
   );
};

export default AddProduct;