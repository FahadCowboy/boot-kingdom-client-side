import React from 'react';

const UpComing = () => {
   return (
      <div className="container">
         <h1 className="text-primary mt-5"><span className="fs-1 text-warning">&spades;</span> Upcoming exclusive Boots</h1>
         <div className="row g-5">
            <div className="col-12 col-md-4">
               <img className="w-100 rounded" src={'https://soccerreviewsforyou.com/wp-content/gallery/nike-mercurial-vapor-14-elite-fg-spectrum-pack-soccer-football-boots/Nike-Mercurial-Vapor-14-Elite-FG-Spectrum-Pack-Soccer-Football-Boots-2.jpg'} alt="" />
            </div>

            <div className="col-12 col-md-4">
               <img className="w-100 rounded" src={'https://soccerreviewsforyou.com/wp-content/gallery/adidas-x-speedflow-1-fg-numbers-up-pack-soccer-football-boots/adidas-X-Speedflow-.1-FG-Numbers-Up-Pack-Soccer-Football-Boots-1.jpg'} alt="" />
            </div>

            <div className="col-12 col-md-4">
               <img className="w-100 rounded" src={'https://soccerreviewsforyou.com/wp-content/gallery/puma-ultra-1-3-fg-faster-football-soccer-football-boots/Puma-Ultra-1.3-FG-Faster-Football-Soccer-Football-Boots-1.jpg'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default UpComing;