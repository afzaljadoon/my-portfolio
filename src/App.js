import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;