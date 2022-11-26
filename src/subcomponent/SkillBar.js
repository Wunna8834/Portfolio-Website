import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
function SkillBar(props) {
  return (
    <div className='col-6 mt-2'>
        <h6>{props.skillName}</h6>
        <ProgressBar now={props.percent} label={props.percent + '%'}/>
    </div>
  )
}

export default SkillBar