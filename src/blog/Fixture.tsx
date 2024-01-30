import { AiOutlineArrowRight } from "react-icons/ai"; 
import './pagination.css';
import willbro from '../assets/willbro.jpg';
import Frame from '../assets/Frame.jpg';
import { NavLink } from "react-router-dom";


const Fixture = () => {
     const active = {
        color: '#7B0924',
        textDecoration: 'underline'
    }
  return (
    <section className='fixture'>

      <div className="headerPagination  paginationItem">
          <header className="fixtureHeader">
             
          <NavLink to={`.`} end style={({ isActive }) => isActive ? active : {color:'black'}}>
          Men
        </NavLink>
        
            <NavLink to={`#`} style={({isActive}) => isActive ? active :  {color:'black'}}>Women </NavLink>
          </header>
       <div className="allFixtures">
        <span>NEXT FIXTURES</span>
        <span>All  fixtures <AiOutlineArrowRight /></span>
       </div>
      </div>
      <div className="centerPagination paginationItem" >
        <h4>NLO </h4>
        <h4>MATCHDAY 12</h4>
        <h6>2 February 2024</h6>
      </div>
      <div className="bottomPagination  paginationItem">
        <img src={Frame} alt="" className="featuresImg imgAway"/>
        <button className="paginationBtn">
        4:30 <br />
        WAT
        </button>
        <img src={willbro} alt="" className="featuresImg imgAway" />
      </div>
    </section>
  )
}

export default Fixture
