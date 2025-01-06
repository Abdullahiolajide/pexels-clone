// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pexelsWhite from '/src/Images/pexels-white.png';
import "./Navibar.css"

function Navibar() {
  return (
    <Navbar expand="lg"  style={{backgroundColor:"transparent", color:"white"}}>
      <Container style={{backgroundColor:"transparent"}}>
        <Navbar.Brand href="#home" style={{color:"White"}}> <img width='25%' src={pexelsWhite} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="" style={{flexGrow:"0",backgroundColor:"transparent",width:"37%", justifyContent:"space-between"}}>
          <Nav className="me-auto" style={{width:"100%", justifyContent:"space-between", color:"white"}}>
            <NavDropdown title="Explore" id="basic-nav-dropdown" className="text-white" style={{color:"white",width:"100%"}}>
              <NavDropdown.Item href="#action/3.1" style={{width:"100%"}}>Discover Photos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{width:"100%", color:"white"}}>Liscense</Nav.Link>
            <Nav.Link href="#link" style={{width:"100%", color:"white"}}>Upload</Nav.Link>
            <Nav.Link href="#link" style={{width:"100%", color:"white"}}>...</Nav.Link>
            <button className="inc-btn" style={{}}>Join</button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navibar;