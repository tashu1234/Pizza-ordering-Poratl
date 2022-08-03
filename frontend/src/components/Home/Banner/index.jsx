import React from 'react';
import './styles.css';
import bannerImg from './banner2.jpg';
//import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
     
      <div className='content-main'>
        <h1>Food Ordering portal..</h1>
        <h1>Order Your Pizza Burger from here....</h1>
       
       
        <button onClick={handleScrollMenu}>
          Click <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='Vaishnavi' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
