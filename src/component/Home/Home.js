import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import SpecialBoots from './SpecialBoots/SpecialBoots';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <SpecialBoots></SpecialBoots>
         <Reviews></Reviews>
      </div>
   );
};

export default Home;