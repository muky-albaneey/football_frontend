import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headerCon'>
        <div className="brand">
            <img src="./Frame.jpg" alt="" className='Frame'/>
        </div>
      <nav>
        <div className="nav_items">ACM-TV <span>|</span></div>
        <div className="nav_items">SHOP <span>|</span></div>
        <div className="nav_items">INVEST <span>|</span></div>
        <div className="nav_items">TROPHIES <span>|</span></div>
        <div className="nav_items">KIDSCLUB <span>|</span></div>
        <div className="nav_items">TRAVELLING <span>|</span></div>
        <div className="nav_items">MEMBERSHIP <span>|</span></div>
        <div className="nav_items">EVENTS <span>|</span></div>
        
      </nav>
    </div>
  )
}

export default Header
