import React from 'react'
import Button from 'react-bootstrap/Button'
import './Hero.css';
import MyImage from '../img/Wunna.jpg'
import { BsArrowBarDown } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
import '../component/Title.css';
function Hero() {
  const downloadClick = () => {
    fetch('MyCV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = fileURL;
        link.download = 'MyCV.pdf';
        link.click();
      })
    })
  }
  return (
    <div className='mt-4 d-flex justify-content-between align-items-center ps-lg-5 col-12' id='home'>
        <div className='col-lg-8 col-9'>
            <h1 className='title-txt'><span className='text-secondary'>Hi! I am</span><br/><span className='fw-bold' style={{color: '#FEFCF3'}}>Wunna Aung</span></h1>
            <h4 className='fst-italic' style={{color: '#3F0071'}}>Front-end Developer</h4>
            <p className=' mt-3 fw-normal col-lg-6 col-8'>I am passionate about web development. I have one year experience of learning web development.</p>
            <button className='custom-btn title-txt' onClick={downloadClick}>Download CV <BsArrowBarDown /></button>
            <a href="#projects">
              <button className='project-btn title-txt'>View Projects <BsArrowDownRight /></button>
            </a>
        </div>
        <div className='col-lg-6 col-6 col-md-6'>
            <img className='col-lg-6 col-6 col-md-6' src={MyImage}/>
        </div>
    </div>
  )
}

export default Hero