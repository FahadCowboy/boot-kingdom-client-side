import React from 'react';

const UpComing = () => {
   return (
      <div className="container mb-5">
         <h1 className="text-secondary mb-4 mt-5"><span className="fs-1 text-warning">&spades;</span> Upcoming exclusive Boots</h1>
         <div className="row g-5 pt-4">
            <div className="col-12 col-md-4">
               <div class="card p-2 bg-dark text-white">
                  <img src="https://soccerreviewsforyou.com/wp-content/gallery/nike-mercurial-vapor-14-elite-fg-spectrum-pack-soccer-football-boots/Nike-Mercurial-Vapor-14-Elite-FG-Spectrum-Pack-Soccer-Football-Boots-2.jpg" class="card-img" alt="..."/>
                  <div class="card-img-overlay">
                     <h5 class="card-title text-dark fs-6">Nike Mercurial Vapor 14 Elite</h5>
                  </div>
               </div>

            </div>

            <div className="col-12 col-md-4">
               <div class="card p-2 bg-dark text-white">
                  <img src="https://soccerreviewsforyou.com/wp-content/gallery/adidas-x-speedflow-1-fg-numbers-up-pack-soccer-football-boots/adidas-X-Speedflow-.1-FG-Numbers-Up-Pack-Soccer-Football-Boots-1.jpg" class="card-img" alt="..."/>
                  <div class="card-img-overlay">
                     <h5 class="card-title text-dark fs-6">Adidas X Speedflow.1 FG</h5>
                  </div>
               </div>
            </div>

            <div className="col-12 col-md-4">
               <div class="card p-2 bg-dark text-white">
                  <img src="https://soccerreviewsforyou.com/wp-content/gallery/puma-ultra-1-3-fg-faster-football-soccer-football-boots/Puma-Ultra-1.3-FG-Faster-Football-Soccer-Football-Boots-1.jpg" class="card-img" alt="..."/>
                  <div class="card-img-overlay">
                     <h5 class="card-title text-dark fs-6">Puma Ultra 1.3</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpComing;