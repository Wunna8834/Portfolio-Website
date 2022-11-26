import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import Button from 'react-bootstrap/Button'
function Contact() {
  return (
    <div className="bg-dark p-5 d-flex justify-content-around align-items-center">
        <h3 className='text-light'>My contact <br/>infromation...</h3>
        <div>
          <Button variant="" href="https://github.com/Wunna8834"><FaGithub className='text-light fs-2'/></Button>
          <Button variant="" href="https://www.linkedin.com/in/wunna-aung-256116227/"><FaLinkedin className="text-primary fs-2" /></Button>
          <Button variant="" href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail"><SiGmail className="text-danger fs-2" /></Button>
        </div>
    </div>
  )
}

export default Contact