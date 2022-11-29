import React from 'react'
import Certificate from '../img/LTE-One.png';
import CertificateTwo from '../img/LTE-Two.png';
import CertificateThree from '../img/MAP.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../component/Title.css';
function Award() {
  return (
    <div className='mt-3'>
        <h2 className='text-center title-txt'>My Award</h2>
        <CardGroup className='col-8 mx-auto'>
          <Card style={{backgroundColor: '#DEBACE'}}>
            <Card.Body>
              <Card.Img src={Certificate} />
              <Card.Text className="text-center text-dark fw-semibold">WD4E Level One</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#DEBACE'}}>
            <Card.Body>
              <Card.Img src={CertificateTwo} />
              <Card.Text className="text-center text-dark fw-semibold">WD4E Level Two</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#DEBACE'}}>
            <Card.Body>
              <Card.Img src={CertificateThree} />
              <Card.Text className="text-center text-dark fw-semibold">Volunteer Experience</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
    </div>
  )
}

export default Award