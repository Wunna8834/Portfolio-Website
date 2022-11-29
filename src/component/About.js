import React from 'react'
import Card from 'react-bootstrap/Card'
import '../component/Title.css';

import Web from '../img/web.png';
function About() {
  return (
    <div className='mt-4' id='about'>
        <h2 className='text-center title-txt'>About Me</h2>
        
       

        <div className='d-flex flex-column flex-lg-row gap-2 justify-content-center align-items-start mt-3'>
            <Card className='col-lg-3 col-sm-12 card-txt'>
                <Card.Header>
                   <Card.Title> Former Engineering Student</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>at Yangon Technological University</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>2015-2019</Card.Footer>
            </Card>
            <Card className='col-lg-3 col-sm-12 card-txt'>
                <Card.Header>
                   <Card.Title>Will Get HND Diploma in 2023</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>from GUSTO University</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>2022-2023</Card.Footer>
            </Card>
            <Card className='col-lg-4 col-sm-12 card-txt'>
                <Card.Header>
                   <Card.Title>Learning Web Development since 2021</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>from Lat Twae Education</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>2021- till the day I die</Card.Footer>
            </Card>
        </div>
    </div>
  )
}

export default About