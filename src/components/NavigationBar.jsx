import React, { Component } from 'react';
import '../css/navbar.css'
import logo from '../assets/nsylogo.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  state = {
  };



  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Col>
            <Link to='/'>
              <Navbar.Brand>
                <img src={logo} className='navbar-links-logo-img' />
              </Navbar.Brand>
            </Link>
          </Col>

          <Col>
            <Link to='/'>
              Home
            </Link>
          </Col>

          <Col>
            <Link to='/events'>
              Events
            </Link>
          </Col>
          {/* <Col>
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
          </Col> */}
        </Container>
      </Navbar>
    )
  }




};



export default NavigationBar