import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Project1 from '../img/Project One.png';
import Project2 from '../img/Project Two.png';
import Project3 from '../img/Project 3.png';
function Project() {
  return (
    <div>
        <h2>Here are my projects...</h2>
        <CardGroup className='col-12'>
          <Card className='col-4'>
            <CardImg src={Project1}/>
            <Card.Body>
              <Card.Title>Frontend Mentor Challenge</Card.Title>
              <Card.Text>Data Visualization</Card.Text>
            </Card.Body>
          </Card>
          <Card className='col-4'>
            <CardImg src={Project2}/>
            <Card.Body>
              <Card.Title>Harry Potter Characters</Card.Title>
              <Card.Text>API Fecting</Card.Text>
            </Card.Body>
          </Card>
          <Card className='col-4'>
            <CardImg src={Project3}/>
            <Card.Body>
              <Card.Title>Movie App</Card.Title>
              <Card.Text>API Fetching</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
    </div>
  )
}

export default Project