import React from 'react';
import cover from '../Images/cover.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className="banar container">
          <img  src={cover} alt="" />
          <input type="text" placeholder="Type your name" />
           <button>Submit</button>
        </div>
    );
};

export default Home;