import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from 'react'
import './pagination.css';
import willbro from '../assets/willbro.jpg';
import Frame from '../assets/Frame.jpg';

const Fixture = () => {
  return (
    <section className='fixture'>
      <div className="headerPagination  paginatioItem">
        <span>NEXT FIXTURES</span>
        <span>All  fixtures <AiOutlineArrowRight /></span>
      </div>
      <div className="centerPagination paginatioItem" >
        <h4>NLO </h4>
        <h4>MATCHDAY 12</h4>
        <h6>2 February 2024</h6>
      </div>
      <div className="bottomPagination  paginatioItem">
        <img src={Frame} alt="" className="featuresImg imgAway"/>
        <button className="paginationBtn">
        16;30 <br />
        WAT
        </button>
        <img src={willbro} alt="" className="featuresImg imgAway" />
      </div>
    </section>
  )
}

export default Fixture
