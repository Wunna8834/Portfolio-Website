import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaHtml5, FaCss3, FaJs, FaBootstrap } from 'react-icons/fa';
import Logo from '../img/logo-react-icon.png';
import '../component/Title.css'
function SkillBar(props) {
  return (
    <div className='d-flex flex-wrap justify-content-sm-center justify-content-center align-items-center mt-4 col-lg-6 col-sm-12 mx-auto'>
      <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
        <FaHtml5 style={{fontSize: '5rem', color: '#FD841F'}}/>
        <h5 className='skill-txt'>HTML5</h5>
      </div>
      <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
        <FaCss3 style={{fontSize: '5rem', color: '#5F9DF7'}}/>
        <h5 className='skill-txt'>CSS3</h5>
      </div>
      <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
        <FaJs style={{fontSize: '5rem', color: '#FFFF00'}}/>
        <h5 className='skill-txt'>Javascript</h5>
      </div>
      <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
        <FaBootstrap style={{fontSize: '5rem', color: '#7743DB'}}/>
        <h5 className='skill-txt'>Bootstrap 5</h5>
      </div>
      <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
        <img src={Logo} style={{width: '5rem', height: '5rem'}}/>
        <h5 className='skill-txt'>React</h5>
      </div>

    </div>
  )
}

export default SkillBar