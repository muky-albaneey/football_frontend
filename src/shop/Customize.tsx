import { TbCurrencyNaira } from "react-icons/tb"; 
import { Link, NavLink } from "react-router-dom";
import { BiArrowToTop, BiCart } from 'react-icons/bi';
import ButtonsExample from './Searching';
import { IoBagCheckOutline } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCartStore } from "../store/cart";
import home from '../assets/home.jpg';
import React from "react";

const Customize = () => { 
  

  const [sizeValue, setSize] = React.useState<string>('');
  const [id, setId] = React.useState<string>('');
  const [qtyValue, setQty] = React.useState<number>(0);

  
  // State variables and functions from the cart store
  const { items, addToCart, calculateTotalQuantity } = useCartStore();

  // const totalQuantity = calculateTotalQuantity(items.q);

  const itemsLength = items.length;
  

  // Get the current state
  const currentState = useCartStore.getState();

  // Call calculateTotalQuantity with the currentState
  const totalQuantity = calculateTotalQuantity(currentState);


  const totalAmount = totalQuantity * 23000

  function numberWithCommas(amount:number) {

    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const actualTotalAmount = numberWithCommas(totalAmount);

// Event handler for adding item to cart
const handleAddToCart = () => {
  // Check if all required fields are filled
  if (id && sizeValue && qtyValue > 0) {
    // Add item to cart with selected size and quantity
    addToCart(id, sizeValue, qtyValue);
  } else {
    // Handle case where required fields are not filled
    // You can show a message or perform any other action here
    console.log("Please fill in all required fields");
  }
};

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
  }
  

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
     <main id="checkOutCon">
        <div className="checkOutTop">
          <div className="checkOutTopLeft">
          <Container>
            <Row>      
              <Col xs={6} md={4}>
                <Image src={home}  />
              </Col>
            </Row>
          </Container>
          </div>
          <div className="checkOutTopRight">
            <h1>ATHLETIC CLUB MIDLANDS HOME JERSEY 2024-25</h1>
            <main className="checkOutTopRightInfo">
              <div className="checkOutTopRightLeftInfo">
                <div className="checkOutTopRightLeftInfoInputs">
                  <input type="text" placeholder="Jersey Name" />
                  <input type="text" placeholder="Jersey Number" />
                </div>
                <div className="checkOutTopRightLeftInfoSelect">
                  <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality">Size</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                  {sizeValue ? sizeValue : 'Size'}
                    
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSize("M")} style={{color:'black'}}>M</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSize("S")} style={{color:'black'}}>S</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSize("2XL")} style={{color:'black'}}>2XL</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSize("XL")} style={{color:'black'}}>XL</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSize("L")} style={{color:'black'}}>L</Dropdown.Item>
                    

                  </Dropdown.Menu>
                </Dropdown>
                  </div>
                  <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality">Quantity</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                {qtyValue ? qtyValue : 'Qty'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={() => setQty(1)} style={{color:'black'}}>1</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty(2)} style={{color:'black'}}>2</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty(3)} style={{color:'black'}}>3</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty(4)} style={{color:'black'}}>4</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                  </div>
                  
                </div>
                <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality">Jersey Type</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                  {id ? id : 'Type'}
                    
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setId("away")}>Away</Dropdown.Item>
                    <Dropdown.Item onClick={() => setId("home")}>Home</Dropdown.Item>      
                    
                  </Dropdown.Menu>
                </Dropdown>
                  </div>
              </div>
              <div className="checkOutTopRightRightInfo">
                <div className="checkOutTopRightRightInfoItems">
                  <span>Regular : </span><span><TbCurrencyNaira />23,000.00</span>
                </div>
              </div>
            </main>           
         
          </div>
        </div>
        <div className="checkOutBottom" id="cartCheckOutBottom">
        <div className="checkOutBottomHeader">
          <span>Cart Total</span><span><TbCurrencyNaira />{actualTotalAmount}.00</span>
        </div>
      {id && sizeValue && qtyValue > 0  ? <button className="checkOutBottomBtn" onClick={handleAddToCart}>
          <span><IoBagCheckOutline /></span>
          <span><Link to='/AllCart' style={{color:'#FFFFFF'}}>Checkout </Link></span>
          </button> : <button className="checkOutBottomBtn" onClick={scrollToTop}>
          Go to top <BiArrowToTop /></button>}
        </div>
        <Link to='/shop'>CONTINUE SHOPPING</Link>
        {/* <button className="x"><BiX /></button> */}
     </main>
    </section>  
  )
}

export default Customize
