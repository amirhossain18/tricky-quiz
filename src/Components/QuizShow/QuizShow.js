import React from 'react';
import { Card } from 'react-bootstrap';
import Quizsingle from '../Quiz/Quizsingle';
import './Quiz.css'

const QuizShow = (props) => {
    const quizall= props.alldata
    const {question , options}=quizall
console.log(quizall)
    return (
        <div className="container">
     
     <Card>
      <Card.Header>Q: {question}</Card.Header>
   

      <div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
{options[0]}
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
<label className="form-check-label" for="flexRadioDefault2">
{options[1]}
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
<label className="form-check-label" for="flexRadioDefault2">
{options[2]}
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
<label className="form-check-label" for="flexRadioDefault2">
{options[3]}
</label>
</div>

 
   
    </Card>

      
            
        </div>
    );
};

export default QuizShow;

