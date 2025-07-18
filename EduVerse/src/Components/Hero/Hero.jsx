import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>Where Smart Minds Build a Smarter, Greener Tomorrow</h1>
        <p>A new era of education begins here — open, inclusive, and built for every curious mind on the planet. From classrooms to communities, from local to global, we bring together learners and educators to share knowledge that inspires progress. No matter your passion or path, this is a space to grow, contribute, and shape a brighter, more sustainable tomorrow — together.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  );
}

export default Hero;
