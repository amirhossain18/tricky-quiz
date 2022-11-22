import React from 'react';
import { Card } from 'react-bootstrap';
import Quizsingle from '../Quiz/Quizsingle';
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizShow = (props) => {
  
    const quizall= props.alldata
    const {question , options , correctAnswer }=quizall
 const submitAns=(selectedValue) =>{
    if(selectedValue=== correctAnswer){
        toast("Your Answer is Right")
      
    }
    else{

        toast("your selected answer is wrong")
      
    }
 }
    return (
        <div className="container">
     <Card>
      <Card.Header>Q: {question}</Card.Header>
   

      <div className="form-check">
<input onClick={()=>submitAns(options[0])} className="form-check-input" type="radio" name="flexRadioDefault" id={options[0]}/>
<label className="form-check-label" htmlFor={options[0]}>
{options[0]}
</label>
</div>
<div className="form-check">
<input onClick={()=>submitAns(options[1])}  className="form-check-input" type="radio" name="flexRadioDefault" id={options[1]}/>
<label className="form-check-label" htmlFor={options[1]}>
{options[1]}
</label>
</div>
<div className="form-check">
<input onClick={()=>submitAns(options[2])}  className="form-check-input" type="radio" name="flexRadioDefault" id={options[2]}/>
<label className="form-check-label" htmlFor={options[2]}>
{options[2]}
</label>
</div>
<div className="form-check">
<input onClick={()=>submitAns(options[3])}  className="form-check-input" type="radio" name="flexRadioDefault" id={options[3]}/>
<label className="form-check-label" htmlFor={options[3]}>
{options[3]}
</label>
</div>

 
<ToastContainer />
    </Card>

      
            
        </div>
    );
};

export default QuizShow;

