import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Banar from '../Banar/Banar';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {
    const allQuize = useLoaderData();
    const quizdata =allQuize.data
    return (
        <div className="container">
     
        

    <Banar></Banar>
           <div className="main-body">
      {
        quizdata.map(quiz =><Quiz 
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)
      }

           </div>
        </div>
    );
};

export default Home;