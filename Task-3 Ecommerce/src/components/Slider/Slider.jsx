import React, { useState } from 'react';
import WestOutlinedIcon   from  '@mui/icons-material/WestOutlined';
import EastOutlinedIcon   from '@mui/icons-material/EastOutlined';

import "./Slider.css"
//2303
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
   "https://plus.unsplash.com/premium_photo-1691917243336-486dd292fb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1693922874427-fe02b8961458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1692071097529-320eb2b32292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1); 
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1); 
  };
  
  return (
    <div className="slider">
      <div className="container" style={{ transform:`translateX( -${currentSlide * 100}vw)` }}>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
      </div>
      <div className="icons">
      <div className="icon" onClick={prevSlide}> 
      <WestOutlinedIcon/> 
      </div>
      <div className="icon" onClick={nextSlide}> 
      <EastOutlinedIcon/> 
      </div>
      </div>
    </div>
  )
}

export default Slider