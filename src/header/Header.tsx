import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
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
      <div className="right_nav">
         <div className="nav_items "><AiOutlineTwitter className='icons' /><BsFacebook className='icons' /> <span>|</span></div>
        <div className="nav_items">EVELOGINNTS</div>
      </div>
    </div>
  )
}

export default Header
