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
function App() {
  return (
    <Container className='px-4 py-3' style={{backgroundColor: '#FFF6BF'}}>
      <NavBar />
      <Hero/>
      <About />
      <Skill />
      <Project />
      <Contact />
      <Award />
    </Container>
  );
}

export default App;
