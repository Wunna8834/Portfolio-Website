import React from 'react';
import SkillBar from '../subcomponent/SkillBar';
import { FaMedapps, FaRegCommentDots, FaBrain, FaRegListAlt } from 'react-icons/fa'
import Award from './Award';
import '../component/Title.css';
function Skill() {
    
  return (
    <div className='mt-5' id='skills'>
      <h2 className='text-center title-txt'>Technical Skills:</h2> 
      <div className='mx-auto'>
         <SkillBar />
      </div> 
      <div>
        <h2 className='text-center mt-4 title-txt'>Interpersonal Skills:</h2>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 col-sm-8 col-lg-12 col-md-12 mt-4'>
          <div className='fs-2 bg-body col-lg-2 col-md-4 col-sm-4 p-2 d-flex flex-column justify-content-center align-items-center rounded shadow'>
            <FaMedapps />
            <h5 className='fs-6 text-center'>Creative <br/> Thinking</h5>
          </div>
          <div className='fs-2 bg-body col-lg-2 col-md-4 col-sm-4 p-2 d-flex flex-column justify-content-center align-items-center rounded shadow'>
            <FaRegCommentDots />
            <h5 className='fs-6 text-center'>Good <br/>Communication</h5>
          </div>
          <div className='fs-2 bg-body col-lg-2 col-md-4 col-sm-4 p-2 d-flex flex-column justify-content-center align-items-center rounded shadow'>
            <FaBrain />
            <h5 className='fs-6 text-center'>Open <br/>Minded</h5>
          </div>
          <div className='fs-2 bg-body col-lg-2 col-md-4 col-sm-4 p-2 d-flex flex-column justify-content-center align-items-center rounded shadow'>
            <FaRegListAlt />
            <h5 className='fs-6 text-center'>Work Under <br/>Pressure</h5>
          </div>
        </div>
      </div>
      <Award />
    </div>
  )
}

export default Skill