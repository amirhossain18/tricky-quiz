import React from 'react';
import banar from '../Images/cover.jpg'
import './Banar.css'
const Banar = () => {
    return (
        <div className="container">
  <div className="row banar">
    <div className="col">
    <img className="img-fluid" src={banar} alt="" />
    </div>
    <div className="col">
    <img className="img-fluid" src={banar} alt="" />
    </div>
    </div>
    </div>
    );
};

export default Banar;