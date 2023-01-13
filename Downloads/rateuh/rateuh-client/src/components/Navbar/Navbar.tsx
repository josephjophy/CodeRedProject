import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'


function NavBar(){
    return(
        <Navbar bg="uhred" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Nav.Link as ={Link} to="../">RateUH</Nav.Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link} to="/instructors">Instructors</Nav.Link>
              <Nav.Link as ={Link} to="/courses">Courses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }
 
 export default NavBar

