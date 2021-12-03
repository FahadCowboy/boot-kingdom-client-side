import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
   const [reviews, setReviews] = useState([])

   useEffect(() => {
      fetch('https://boot-kingdom.herokuapp.com/feedbacks')
      .then(res => res.json())
      .then(data => setReviews(data))
   }, [])

   return (
      <div className="container">
         <h1 className="text-secondary mb-4 mt-5"><span className="fs-1 text-warning">&spades;</span> What people experienced</h1>
         <div className="row gx-3 gy-3 pt-4">
            {
               reviews.map(review => (
                  <div key={review._id} className="col-12 col-md-6 col-lg-3 rounded">
                     <div className="">
                        <div>
                              <p className="mb-0 fw-bold">{review.name}</p>
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