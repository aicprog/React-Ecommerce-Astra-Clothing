import React from 'react';
import './homepage.scss' 
import Directory from '../../components/directory';
import Hero from '../../components/hero';



const HomePage = () => (
  <div className="homepage">
    <Hero/>
    <Directory/>
  </div>
)

export default HomePage;