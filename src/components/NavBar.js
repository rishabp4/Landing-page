import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Rishab-Patel-9-11-2024 (3).png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github-30.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: '400px', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
  <div className="social-icon">
    {/* LinkedIn Link */}
    <a href="https://www.linkedin.com/in/rishab-patel4" target="_blank" rel="noopener noreferrer">
      <img src={navIcon1} alt="LinkedIn" />
    </a>
    {/* Instagram Link */}
    <a href="https://www.instagram.com/rishab._.patel/" target="_blank" rel="noopener noreferrer">
      <img src={navIcon3} alt="Instagram" />
    </a>
    {/* Github Link */}
    <a href="" target="_blank" rel="noopener noreferrer">
      <img src={navIcon2} alt="GitHub" />
    </a>
  </div>
  <HashLink to='#connect'>
    <button className="vvd"><span>Let’s Connect</span></button>
  </HashLink>
</span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}