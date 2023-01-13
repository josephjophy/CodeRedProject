import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Card, Button} from 'react-bootstrap'
import './HomePage.css'
import logo from './images/home-logo.png'
import instructors from './images/uhinstructors.png'
import slotmachine from './images/slotmachine.svg'


function HomePage(){
    return(
       <div className = "Home-contents">
           <img src = {logo} className = "App-logo-home" alt="logo"></img>
           <Container fluid>
        <p className = "mission">Our Mission</p>
        <p className = "mission-statement">To provide public transparency of student feelings and university data.</p>
        <p className = "features">Rate your instructors and courses.</p>
        </Container>

        <Card className = "about-menu" style={{ width: '100%',height: '75px' }}>
  <Card.Body>
    <Card.Title>How it works?</Card.Title>
  </Card.Body>
       </Card>
     
     <rect className = "faculty-section">
     <h1 className = "intr-intro">Discover your Instructors</h1>
       <Card className = "faculty-about" style={{width: '325px', top:'-80px'}}>
              <Card.Body>
              <Card.Img variant="top" src = {instructors} style={{width: '200px', height:'200px'}} />
                <Card.Text>View average instructor GPA</Card.Text>
                <Card.Text>Compare instructors</Card.Text>
                <Card.Text>Write and read reviews</Card.Text>
                <Link to ="/faculty" className="get-started2"><Button className = "get-started" variant="primary">Get Started</Button></Link>
              </Card.Body>
       </Card>
     </rect>


     <rect className = "courses-section"> 
     <h1 className = "cou-intro">Find your courses</h1>
        <Card className = "courses-about" style={{width: '325px', top:'-80px'}}>
            <Card.Body>
            <Card.Img variant="top" src = {slotmachine} style={{width: '300px', height:'200px'}} />
            <Card.Text>View average GPA for courses</Card.Text>
            <Card.Text>Compare courses</Card.Text>
            <Card.Text>Write and read reviews</Card.Text>
            <Link to ="/courses" className="get-started2"><Button className = "get-started" variant="primary">Get Started</Button></Link>
            </Card.Body>
        </Card>
     </rect>


       </div>
    );
}

export default HomePage;