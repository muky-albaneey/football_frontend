import { BiPlus } from "react-icons/bi"; 
import { NavLink } from "react-router-dom";
import Frame from '../assets/Frame.jpg';
import { BiCart } from 'react-icons/bi';
import ButtonsExample from './Searching';
import Kit_img from "./Kit_img";
import { TbCurrencyNaira } from 'react-icons/tb';
// import './shopping.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Card } from 'antd';
import OIP_shop_1 from '../assets/OIP_shop_1.jpg';
import game_icons_comet_spark from '../assets/game_icons_comet_spark.jpg';
const Kit = () => {
    const styles ={
        fontWeight : 'bold'
    }
  return (  
      <section className="shopWrapperMother">
      
      <main id="trade">
        <button className='save_more'>SIGN UP  & SAVE 10%</button>
        <span className='cart'><BiCart className='cartItem' /></span>
      </main>
      <main id="navHeader">
        <div className="left_navHeader">
        <NavLink  to='/'><img src={Frame} alt="" className='Frame FrameShop'/></NavLink>
        <span >ACM SHOP</span>
        </div>
        <ButtonsExample /> 
        {/* <div className="right_navHeader"></div> */}
      </main>
      <main id="navs">
      <NavLink to=''>KITS</NavLink>
        <NavLink to=''>TRAINING</NavLink>
        <NavLink to=''>MEN</NavLink>
        <NavLink to=''>WOMEN</NavLink>
        <NavLink to=''>KIDS</NavLink>
      </main>
      <div className='downNav'>
      <h1 >ATHLETIC CLUB MIDLANDS /  ATHLETIC CLUB MIDLANDS JERSEY</h1>
      </div>
      
      <section className='kitCon'>

      <div className="kitLeft">
      <Kit_img />
      </div>
      <div className="kitRight">
        <h1>ATHLETIC CLUB MIDLANDS HOME JERSEY 2024-25</h1>
        <h5><span style={styles}>Regular : </span> <span><TbCurrencyNaira />  23,000.00</span></h5>
        <div className="kitBox">
            <div className="kitBoxLeft">
                <button className="kitBoxLeftBtn s">S</button>
                <button className="kitBoxLeftBtn">2XL</button>
                <div>
                <span className="quality">Quantity</span>
                <Dropdown  className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                 <Dropdown.Toggle variant="" id="dropdown-basic">
                     1
                  </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div> 
            </div>
            <div className="kitBoxRight">
                <div className="kitBoxRightTop">
                <button className="kitBoxBtnRightTop">M</button>
                <button className="kitBoxBtnRightTop">XL</button>
                <button className="kitBoxBtnRightTop">L</button>
                </div>
                <div className="kitBoxRightBottom">
                <button className="kitBoxBtnRightBottom">Customise</button>
                <button className="kitBoxBtnRightBottom ac">Add to Cart</button>
            </div>                
            </div>
          
        </div>
      </div>
    </section>
    <div className="addsOn">
        <div className="Shipping"><span>Shipping</span> <span><BiPlus /></span></div>
        <div className="Shipping"><span>Details</span> <span><BiPlus /></span></div>
        <div className="Shipping"><span>Description</span> <span><BiPlus /></span></div>
       
    </div>
    <div className="lastView">
        <h5>Recently Viewed</h5>
        <div className="viewedCard">
        <Card
    className='custom-card'
    cover={<img alt="example" src={OIP_shop_1} className='img_card' />}
    style={{ borderBottom: '1px solid #e8e8e8' }}
     >
    <Card.Meta
      title={
        <span><TbCurrencyNaira /> 15,000.00</span>
        
      }
      description={
        <span>
          ACM x  Essential Hoodie,<br />
          <img src={game_icons_comet_spark} alt=""  id='shop_icon'/> New Arrival
        </span>
      }
    />
  </Card>
        </div>
    </div>
    </section>  
  )
}

export default Kit
