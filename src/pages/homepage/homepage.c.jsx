import React from 'react';
import './homepage.s.scss' 
import Directory from '../../components/directory/directory.c';
import Hero from '../../components/hero/hero.c';

const HomePage = () => (
  <div className="homepage">
    <Hero/>
    <Directory/>
  </div>
)

export default HomePage;