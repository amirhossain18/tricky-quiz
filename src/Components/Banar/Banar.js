import React from 'react';
import banar from '../Images/cover.jpg'
import './Banar.css'
const Banar = () => {
    return (
        <div class="container">
  <div class="row banar">
    <div class="col">
    <img className="img-fluid" src={banar} alt="" />
    </div>
    <div class="col">
    <img className="img-fluid" src={banar} alt="" />
    </div>
    </div>
    </div>
    );
};

export default Banar;