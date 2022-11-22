import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../NotFoundPage/Notfound.css'
const NotFoundPage = () => {
    return (
       <div>
         <Card >
  
  <Card.Body className="text-center">
     <h1> Opss 404 !!!   </h1>
    <Card.Text>
<h3> Page Not Found</h3>
    </Card.Text>
  <Link className="button2" to="/" >GO to Home</Link>
  </Card.Body>
</Card>
       </div>
    );
};

export default NotFoundPage;