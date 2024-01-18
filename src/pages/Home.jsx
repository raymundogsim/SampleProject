import React from 'react';
import Navbar from '../Components/Navbar';
import Notification from '../Components/Notification';
import Slider from '../Components/Slider';

const Home = () => {
  return (
    <div>
      <Notification/>
      <Navbar/>
      <Slider/>
    </div>
  );
};

export default Home
