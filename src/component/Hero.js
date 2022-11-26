import React from 'react'
import Button from 'react-bootstrap/Button'
import './Hero.css';
import MyImage from '../img/Wunna.jpg'
import { BsArrowBarDown } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
function Hero() {
  return (
    <div className='mt-4 d-flex align-items-start col-12' id='home'>
        <div className='col-8'>
            <h1><span className='fs-2 fw-semibold'>Hi! I am</span> <span className='bg-primary text-light p-2 rounded-pill fs-6 fw-semibold'>Front-end developer</span><br/><span className='fs-1'>Wunna Aung</span></h1>
            <p className='col-6 mt-3 fw-normal'>I am passionate about web development. I have one year experience of learning web development.</p>
            <div>
                <button className='custom-btn fw-semibold'>Download CV <BsArrowBarDown /></button>
                <button className='project-btn'>View Projects <BsArrowDownRight /></button>
            </div>
        </div>
        <div className='col-7'>
            <img className='col-4' src={MyImage}/>
        </div>
    </div>
  )
}

export default Hero