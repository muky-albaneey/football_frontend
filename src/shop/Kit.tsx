import { BiPlus } from "react-icons/bi"; 
import { Link, NavLink } from "react-router-dom";
import { BiCart } from 'react-icons/bi';
import ButtonsExample from './Searching';
import Kit_img from "./Kit_img";
import { TbCurrencyNaira } from 'react-icons/tb';
import Dropdown from 'react-bootstrap/Dropdown';
import { Card } from 'antd';
import OIP_shop_1 from '../assets/OIP_shop_1.jpg';
import game_icons_comet_spark from '../assets/game_icons_comet_spark.jpg';
import { useCartStore } from "../store/cart";
import React from "react";


const Kit = () => {
    const styles ={
        fontWeight : 'bold'
    }

    
  const [sizeValue, setSize] = React.useState<string>('');
  // const [idValue, setId] = React.useState<string>('home');
  const [qtyValue, setQty] = React .useState<number>(0);

  // State variables and functions from the cart store
  const {items, addToCart } = useCartStore();
  
  // const navigate = useNavigate();
  // const currentState = useCartStore.getState();

  const itemsLength = items.length;

  // Event handler for adding item to cart
  const handleAddToCart = () => {
    if (sizeValue && qtyValue > 0) {
      // Add item to cart with selected size and quantity
      addToCart('home',sizeValue, qtyValue);
    } else {
   
      console.log("Please fill in all required fields");
    }
    
  
    // navigate("/customize");
  };
 

  return (  
      <section className="shopWrapperMother">
      {itemsLength == 0 ?'' :<div id="c_details" ><Link to='/AllCart' >{itemsLength} </Link></div>}
      <main id="trade">
        <button className='save_more'>SIGN UP  & SAVE 10%</button>
        <NavLink to='/AllCart'><span className='cart'><BiCart className='cartItem' /></span></NavLink>
      </main>
      <main id="navHeader">
        <div className="left_navHeader">
        {/* <NavLink  to='/'><img src={Frame} alt="" className='Frame FrameShop'/></NavLink> */}
        <span >ACM SHOP</span>
        </div>
        <ButtonsExample /> 
        {/* <div className="right_navHeader"></div> */}
      </main>
      <main id="navs">
      <NavLink to='/kit'>KITS</NavLink>
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
            <button className="kitBoxLeftBtn s" onClick={() => setSize('S')}>S</button>
              <button className="kitBoxLeftBtn" onClick={() => setSize('2XL')}>2XL</button>
                <div>
                <span className="quality">Quantity</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
        <Dropdown.Toggle variant="" id="dropdown-basic">
          {qtyValue ? qtyValue : 0}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setQty(1)}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => setQty(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => setQty(3)}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => setQty(4)}>4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></div> 
            </div>
            <div className="kitBoxRight">
                <div className="kitBoxRightTop">  
                <button className="kitBoxBtnRightTop" onClick={() => setSize('M')}>M</button>
                <button className="kitBoxBtnRightTop"  onClick={() => setSize('XL')}>XL</button>
                <button className="kitBoxBtnRightTop"  onClick={() => setSize('L')}>L</button>
                </div>
                <div className="kitBoxRightBottom">
                <button className="kitBoxBtnRightBottom"><Link to='/customize' onClick={handleAddToCart}>Customise</Link></button>
                <button className="kitBoxBtnRightBottom ac"><Link to='/continueCheckOut'  onClick={handleAddToCart}>Add to Cart</Link> </button>
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
