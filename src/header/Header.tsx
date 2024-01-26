import { BiLogIn } from "react-icons/bi"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import Frame from '../assets/Frame.jpg'

function Header() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} sticky='top' expand={expand} className="mb-3 bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand><NavLink  to='/'><img src={Frame} alt="" className='Frame'/></NavLink></Navbar.Brand>
            <Navbar.Brand href="#" id="brandText">ATHLETIC CLUB MIDLANDS</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ maxWidth: '60%', textDecoration : 'none' }} 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">          
          <Link to="shop"  className='nav_item' style={{textDecoration : 'none'}}>shop</Link>
           <NavLink to="fan"  className='nav_item' style={{textDecoration : 'none'}}>fan</NavLink>
           <NavLink to="blog"  className='nav_item' style={{textDecoration : 'none'}}>blog</NavLink>
           <NavLink to="contact"  className='nav_item' style={{textDecoration : 'none'}}>contact us<span></span></NavLink>
              <NavLink to="about"  className='nav_item' style={{textDecoration : 'none'}}>about us<span></span></NavLink>                             
              <NavLink to="#action2" className='nav_item log_nav' style={{textDecoration : 'none'}}>login <BiLogIn /></NavLink>
                
            </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;