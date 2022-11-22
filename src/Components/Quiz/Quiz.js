import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Quiz.css'


const Quiz = (props) => {
    const {name,id,total, logo} = props.quiz;

    return (
       
      <Card className="text-center gy-2">
     <h2>{name} </h2>
      <Card.Body>
        <Card.Title>{name} basic Test Free</Card.Title>
        <Card.Text>
         <img className="img-fluid" src={logo} alt="" />
        </Card.Text>
       <Link  className="button2" to={`quiz/${id}`}>try Now</Link>
       
      </Card.Body>
      <Card.Footer className="text-muted">Total quiz {total}</Card.Footer>
    </Card>
    );
};

export default Quiz;