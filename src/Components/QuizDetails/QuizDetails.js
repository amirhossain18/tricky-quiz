import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const QuizDetails = () => {
    const details = useLoaderData();
    const allDetails = details.data.questions;
 
      console.log(details.data.name)
    return (
        <div>
           <h1> Quiz for {details.data.name} </h1>
            {
               allDetails.map(details=><QuizShow
               alldata={details}
               key={details.id}
               ></QuizShow> ) 
            }
        </div>
    );
};

export default QuizDetails;