import React from 'react';

const Banner = () => {
   return (
      <div className="container">
         <h1 className="text-secondary mt-5 pb-4"><span className="fs-1 text-warning">&spades;</span> Welcome to Boot Kingdom</h1>
         <div className="my-4 p-4 bg-dark rounded">
            <img src={`https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2014/08/boots.jpg?x46956`} className="w-100 rounded" alt="" />
         </div>
      </div>
   );
};

export default Banner;