import { BiLogIn } from "react-icons/bi"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './header.css'


function Header() {

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} sticky='top' expand={expand} className="mb-3 bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand><NavLink  to='/'><img src="./Frame.jpg" alt="" className='Frame'/></NavLink></Navbar.Brand>
            <Navbar.Brand href="#" className="brandText">ATHLETIC CLUB MIDLANDS</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ maxWidth: '60%' }} 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
           <NavLink to="#action1" className='nav_item'> CLUB</NavLink>
          <NavLink to="#action2"  className='nav_item'>SHOP</NavLink>
           <NavLink to="#action2"  className='nav_item'>FAN</NavLink>
           <NavLink to="#action2"  className='nav_item'>CONTACT US</NavLink>
              <NavLink to="#action2"  className='nav_item'>ABOUT US</NavLink>                             
              <NavLink to="#action2" className='nav_item log_nav'>LOGIN <BiLogIn /></NavLink>
                
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