import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaBootstrap} from 'react-icons/fa';
class Header extends React.Component {
  render(){
  return (
    <Navbar expand="lg" className="container border-bottom w-75">
      <Container className="">
        <Navbar.Brand href="#home"><FaBootstrap size="35px" color="black" className="me-3"/>Pricing example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" aria-expanded="false" aria-table="Toggle navigation">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#Enterprise">Enterprise</Nav.Link>
            <Nav.Link href="#Support">Support</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
}

export default Header;