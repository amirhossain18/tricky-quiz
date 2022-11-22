import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar bg="primary" expand="lg" >
      <Container>
        <Navbar.Brand href="/" className="text-white">Tricky Quiz</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto new text-white">
     
        <NavLink  className={({ isActive, isPending }) => {
    return isActive ? "active" :  "text-white"
  }} to='/' >Home</NavLink>
       <NavLink className={({ isActive, isPending }) => {
    return isActive ? "active" :  "text-white"
  }}to='about'>About</NavLink>
       <NavLink className={({ isActive, isPending }) => {
    return isActive ? "active" :  "text-white"
  }} to='statistics'>Statistics</NavLink>
   <NavLink className={({ isActive, isPending }) => {
    return isActive ? "active" :  "text-white"
  }} to='blog'>Blog</NavLink>
          
          
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