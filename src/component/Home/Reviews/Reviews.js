import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
   const [reviews, setReviews] = useState([])

   useEffect(() => {
      fetch('http://localhost:4000/feedbacks')
      .then(res => res.json())
      .then(data => setReviews(data))
   }, [])

   return (
      <div className="container">
         <h2>Reviews</h2>
         <div className="row gx-3 gy-3">
            {
               reviews.map(review => (
                  <div key={review._id} className="col-12 col-md-6 col-lg-3 rounded">
                     <div className="">
                        <div>
                              <p className="mb-0">{review.name}</p>
                              <small className="text-secondary">{review.email}</small>
                              <div>
                              <small className="text-secondary">Ratting: {review.ratting}</small>
                              </div>
                           </div>
                           <div>
                              <p>{review.comment}</p>
                           </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Reviews;