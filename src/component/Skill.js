import React from 'react';
import SkillBar from '../subcomponent/SkillBar';
function Skill() {
    
  return (
    <div className='col-12 mt-3' id='skills'>
      <h2 className=''>I am good at...</h2> 
      <div>
         <SkillBar skillName="HTML5" percent="80" />
         <SkillBar skillName="CSS" percent="70" />
         <SkillBar skillName="Javascript" percent="90" />
         <SkillBar skillName="React JS" percent="60" />
      </div> 
      <hr />
    </div>
  )
}

export default Skill