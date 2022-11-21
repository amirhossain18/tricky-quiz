import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto new">
     
        <Link to='/'>Home</Link>
       <Link to='about'>About</Link>
     
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //     <Navbar>
    //   <Container>
    //     <Navbar.Brand href="#home">Trecky Quiz</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //     <Link to='/'>Home</Link>
    //     <Link to='about'>About</Link>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    );
};

export default Header;