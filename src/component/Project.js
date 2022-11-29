import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Project1 from '../img/Project One.png';
import Project2 from '../img/Project Two.png';
import Project3 from '../img/Project 3.png';
import Crud from '../img/CRUD.png';
import TravelAgency from '../img/Travel Agency.png';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../component/Title.css';
function Project() {
  return (
    <div className='mt-5'>
        <h2 className='text-center title-txt'>Projects</h2>
        <CardGroup className='col-12 gap-2 mt-4'>
          <Card className='col-lg-3 col-sm-12 col-md-8'>
            <CardImg src={Project1}/>
            <Card.Body>
              <Card.Title><a href="https://graceful-donut-273963.netlify.app/" target="blank" style={{textDecoration: "none"}}>Frontend Mentor Challenge</a></Card.Title>
              <Badge bg="primary">HTML</Badge>
              <Badge bg="danger" className='ms-1 me-1'>CSS</Badge>
              <Badge bg="success">Javascript</Badge>
              
            </Card.Body>
          </Card>
          <Card className='col-lg-3 col-sm-12 col-md-8'>
            <CardImg src={Project2}/>
            <Card.Body>
              <Card.Title><a href="https://celebrated-jelly-19836c.netlify.app/" target="blank" style={{textDecoration: 'none'}}>Harry Potter Character</a></Card.Title>
              <Badge bg="primary">HTML</Badge>
              <Badge bg="danger" className='ms-1 me-1'>CSS</Badge>
              <Badge bg="success">Javascript</Badge>
            </Card.Body>
          </Card>
          <Card className='col-lg-3 col-sm-12 col-md-8'>
            <CardImg src={Project3}/>
            <Card.Body>
              <Card.Title><a href="https://benevolent-paletas-474627.netlify.app/" target="blank" style={{textDecoration: 'none'}}>Movie App</a></Card.Title>
              <Badge bg="primary">HTML</Badge>
              <Badge bg="danger" className='ms-1 me-1'>CSS</Badge>
              <Badge bg="success">Javascript</Badge>
            </Card.Body>
          </Card>
          <Card className='col-lg-3 col-sm-12 col-md-8'>
            <CardImg src={Crud}/>
            <Card.Body>
              <Card.Title>CRUD Project</Card.Title>
              <Badge bg="primary">JSON Server</Badge>
             
              <Badge bg="success" className='ms-1'>React</Badge>
            </Card.Body>
          </Card>
          <Card className='col-lg-3 col-sm-12 cod-md-8'>
            <CardImg src={TravelAgency}/>
            <Card.Body>
              <Card.Title>Travel Agency Website</Card.Title>
              <Badge bg="primary">Bootstrap</Badge>
             
              <Badge bg="success" className='ms-1'>React</Badge>
            </Card.Body>
          </Card>
          
        </CardGroup>
    </div>
  )
}

export default Project