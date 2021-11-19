import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import SpecialBoots from './SpecialBoots/SpecialBoots';
import Reviews from './Reviews/Reviews';
import Footer from '../Footer/Footer';
import UpComing from '../UpComing/UpComing';


const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <SpecialBoots></SpecialBoots>
         <Reviews></Reviews>
         <UpComing></UpComing>
         <Footer></Footer>
      </div>
   );
};

export default Home;