import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
function NavBar() {
  return (
    <Navbar expand="lg" className='sticky-top' bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>My_Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto gap-5'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
                <Button variant="primary" size="sm" href="https://m.me/wunnaaung99.m.me">Chat with me</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar