import React from 'react';
import mainImage from '../assets/img/main_img.png'; 

const Main = () => {
  return (
    <div className="image-container d-flex justify-content-center align-items-center w-100">
      <img src={mainImage} alt="Main" className="centered-image" />
    </div>
  );
};

export default Main;
