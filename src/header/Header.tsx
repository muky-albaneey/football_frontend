import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { MdOutlineEventSeat } from "react-icons/md"; 
import { BsSuitClub } from "react-icons/bs"; 
import { AiOutlineTrophy } from "react-icons/ai"; 
import { AiOutlineLineChart } from "react-icons/ai"; 
import { GiJesterHat } from "react-icons/gi"; 
import { CgTv } from "react-icons/cg"; 
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
              style={{ maxWidth: '70%' }} 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {/* <Navbar.Brand><NavLink  to='/'>ATHLETIC CLUB MIDLANDS</NavLink></Navbar.Brand> */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
           <NavLink to="#action1" style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}> <CgTv />ACM-TV <span>|</span></NavLink>
          <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}><GiJesterHat />SHOP <span>|</span></NavLink>
           <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}><AiOutlineLineChart />INVEST <span>|</span></NavLink>
           <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}><AiOutlineTrophy />TROPHIES <span>|</span></NavLink>
              <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}><BsSuitClub />KIDSCLUB <span>|</span></NavLink>
              <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}>MEMBERSHIP <span>|</span></NavLink>
               <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}><MdOutlineEventSeat />EVENTS <span>|</span></NavLink>
              <NavLink to="#action2"  style={{color:'rgb(149, 4, 4)',fontWeight: 'bold', marginLeft: '2rem'}}>LOGIN <span>|</span></NavLink>
                
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