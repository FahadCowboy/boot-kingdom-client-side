import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const colors = {
   orange: "#ff7600",
   grey: "#a9a9a9"
}

const styles = {
   container: {
     display: "flex",
     flexDirection: "column",
     alignItems: "center"
   },
   stars: {
     display: "flex",
     flexDirection: "row",
   },
   textarea: {
     border: "1px solid #a9a9a9",
     borderRadius: 5,
     padding: 10,
     margin: "20px 0",
   }
 
 };


const Feedback = () => {
   const {user} = useAuth()
   const [comment, setComment] = useState('')
   const [currentValue, setCurrentValue] = useState(0);
   const [hoverValue, setHoverValue] = useState(null);
   const stars = Array(5).fill(0)
 
   const handleClick = value => {
     setCurrentValue(value)
   }
 
   const handleMouseOver = newHoverValue => {
     setHoverValue(newHoverValue)
   };
 
   const handleMouseLeave = () => {
     setHoverValue(null)
   }

   const handleComment = e => {
      const comment = e.target.value
      setComment(comment)
   }

   const handleFeedback = e => {
      e.preventDefault()

      const feedback = {
         name: user.displayName,
         email: user.email,
         comment,
         ratting: currentValue
      }
      console.log(feedback)
      fetch('https://boot-kingdom.herokuapp.com/feedbacks',{
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(feedback)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      setCurrentValue(0)
      e.target.reset()
   }

   return (
      <div className="row justify-content-center">
         <form className="col-12 col-lg-6" onSubmit={handleFeedback} style={styles.container}>
            <h2 className="text-secondary">Share your experience</h2>
            <div className="mt-3" style={styles.stars}>
            {stars.map((_, index) => {
               return (
                  <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                     marginRight: 10,
                     cursor: "pointer"
                  }}
                  />
               )
            })}
            </div>
            
            <div className="form-floating w-100 my-3">
               <textarea onBlur={handleComment} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "150px"}}></textarea>
               <label for="floatingTextarea2">Comments</label>
            </div>

            <div className="w-100 d-flex flex-column">
               <button
               className="btn btn-dark"
               style={styles.button}
               >
               Submit
               </button>
            </div>

            
         </form>
      </div>
   );
};

export default Feedback;