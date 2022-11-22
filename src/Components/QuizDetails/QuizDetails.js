import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const QuizDetails = () => {
    const details = useLoaderData();
    const allDetails = details.data.questions;
    const { question } = allDetails
      console.log(allDetails)
    return (
        <div>
        
            {
               allDetails.map(details=><QuizShow
               alldata={details}
               ></QuizShow> ) 
            }
        </div>
    );
};

export default QuizDetails;