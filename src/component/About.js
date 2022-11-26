import React from 'react'
import Card from 'react-bootstrap/Card'
import Me from '../img/Me.jpg';
import Gusto from '../img/Gusto.jpg';
import Web from '../img/web.png';
function About() {
  return (
    <div className='mt-4' id='about'>
        <h2>Let me introduce myself...</h2>
        <p className='fs-4'>I am...</p>

        <div className='d-flex gap-2 justify-content-start align-items-start'>
            <Card className="col-3">
                <Card.Img src={Me}/>
                <Card.Body>
                    <Card.Title>Former YTU Student</Card.Title>
                    <Card.Text className="text-muted">2015 - 2019</Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-3">
                <Card.Img src={Gusto}/>
                <Card.Body>
                    <Card.Title>Currently at GUSTO University</Card.Title>
                    <Card.Text className="text-muted">2022 - now</Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-3">
                <Card.Img src="https://images.unsplash.com/photo-1630659509436-7397fbda30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"/>
                <Card.Body>
                    <Card.Title>Learning web-development since 2021</Card.Title>
                    <Card.Text className="text-muted">2021 - now</Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default About