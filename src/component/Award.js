import React from 'react'
import Certificate from '../img/LTE-One.png';
import CertificateTwo from '../img/LTE-Two.png';
import CertificateThree from '../img/MAP.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Award() {
  return (
    <div className='mt-3'>
        <h2>My Awards...</h2>
        <div className='d-flex justify-content-start align-items-start gap-2'>
            <img src={Certificate} className='col-2'/>
            <img src={CertificateTwo} className='col-2'/>
            <img src={CertificateThree} className='col-2'/>
        </div>
    </div>
  )
}

export default Award