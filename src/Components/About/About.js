import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
   

    <Card className="text-center">
      <Card.Header> <h1>Web Development Quizzes & Tricky</h1> </Card.Header>
      <Card.Body>
      
        <Card.Text>
        The internet connects everyone nowadays and web development is a huge part of our society. If you want to be well-known throughout the world then you should probably develop your own website or a web page. Our trivia on web development has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?
        </Card.Text>
        <Link variant="primary" to="/">Top Trending Quizzes</Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}



export default About;