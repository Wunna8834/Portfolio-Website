import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
function NavBar() {
  return (
    <Navbar expand="lg" className='sticky-top' style={{backgroundColor: '#8D72E1'}} variant="dark">
        <Container>
            <Navbar.Brand href="#home">My_Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto gap-5'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
                <Button style={{backgroundColor: '#6C4AB6'}} size="sm" href="https://m.me/wunnaaung99.m.me">Chat with me</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar