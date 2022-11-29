import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import About from './component/About';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import Award from './component/Award';
import './component/About.css';
function App() {
  return (
    <Container className='px-4 py-3 bgc' fluid>
      <NavBar />
      <Hero/>
      <About />
      <Skill />
      <Project />
      <Contact />
      
    </Container>
  );
}

export default App;
