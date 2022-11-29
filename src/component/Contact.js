import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../component/Title.css';
function Contact() {
  return (
    <div className="bg-dark p-5 d-flex justify-content-center align-items-center flex-wrap col-12 gap-4 mt-4">
        <div className='col-lg-4 col-sm-12'>
          <h3 className='text-light title-txt'>My contact <br/>information...</h3>
          <div>
            <Button variant="" href="https://github.com/Wunna8834"><FaGithub className='text-light fs-2'/></Button>
            <Button variant="" href="https://www.linkedin.com/in/wunna-aung-256116227/"><FaLinkedin className="text-primary fs-2" /></Button>
            <Button variant="" href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail"><SiGmail className="text-danger fs-2" /></Button>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <Form className='col-lg-10 col-sm-12'>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter your name"
            className='mb-2'
          >
            <Form.Control type="text" placeholder="Enter your name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter your Organization"
            className='mb-2'
          >
            <Form.Control type="text" placeholder="Enter your organization" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
            
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{height: '100px'}} />
          </FloatingLabel>
          <Button type="submit" onSubmit={(e) => e.preventDefault()}>Submit</Button>
          </Form>
        </div>
    </div>
  )
}

export default Contact