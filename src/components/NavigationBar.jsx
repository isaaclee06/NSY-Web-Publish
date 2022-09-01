import React, { Component } from 'react';
import '../css/navbar.css'
import logo from '../assets/applelogo.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavigationBar extends Component {
  state = {
  };



  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container className='navbar'>
          <Navbar.Brand href="#home" className=''>
            <img
              alt=""
              src={logo}
              width={'50 %'}
              height={'50 %'}
              className="navbar-links-logo"

            />{' '}
            NSY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }




};



export default NavigationBar