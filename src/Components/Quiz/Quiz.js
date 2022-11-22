import React from 'react';
import { Button, Card} from 'react-bootstrap';
import './Quiz.css'


const Quiz = (props) => {
    const {name, total, logo} = props.quiz;
    console.log(props.quiz)
    return (
       
      <Card className="text-center gy-2">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{name} basic Test Free</Card.Title>
        <Card.Text>
         <img className="img-fluid" src={logo} alt="" />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Total quiz {total}</Card.Footer>
    </Card>
    );
};

export default Quiz;