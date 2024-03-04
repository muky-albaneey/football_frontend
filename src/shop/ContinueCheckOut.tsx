// import {  } from "react-icons/bi"; 
import { TbCurrencyNaira } from "react-icons/tb"; 
import { Link, NavLink } from "react-router-dom";
import { BiCart } from 'react-icons/bi';
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

const ContinueCheckOut = () => {

  const [sizeValue, setSize] = React.useState<string>('M');
  const [idValue, setId] = React.useState<string>('Home');
  const [qtyValue, setQty] = React.useState<number>(1);

  // State variables and functions from the cart store
  
  // State variables and functions from the cart store
  const { items, addToCart,  calculateTotalQuantity } = useCartStore();

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
    // Add item to cart with selected size and quantity
    addToCart(idValue, sizeValue, qtyValue);
  };
 
   

  return (  
      <section className="shopWrapperMother">
     {itemsLength == 0 ?'' :<div id="c_details" ><NavLink to='/AllCart' >{itemsLength} </NavLink></div>}
     {/* <div id="c_details" >{items.length}</div> */}
      <main id="trade">
        <button className='save_more'>SIGN UP  & SAVE 10%</button>
      <div style={{position: 'relative'}}>
      <span className='cart'><BiCart className='cartItem' /></span>
        
      </div>
        
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
      <NavLink to=''>KITS</NavLink>
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
                  <div className="checkInputLeft">
                        <span>Name</span><span>John</span>
                  </div>
                  <div className="checkInputRight">
                    <span>Jersey Number</span><span>5</span>
                  </div>
                </div>
                <div className="checkOutTopRightLeftInfoSelect">
                  <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality" >Size</span>
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
                  <span className="quality" >Quantity</span>
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
                  {idValue ? idValue : 'Type'}
                    
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setId("Away")}>Away</Dropdown.Item>
                    <Dropdown.Item onClick={() => setId("Home")}>Home</Dropdown.Item>                                      
                  </Dropdown.Menu>
                </Dropdown>
                  </div>
              </div>
              
              <div className="checkOutTopRightRightInfo">
                <div className="checkOutTopRightRightInfoItems">
                  <span>Regular : </span><span><TbCurrencyNaira /> 23,000.00</span>
                </div>
              </div>

            </main>           
     
          </div>
        </div>
        <div className="checkOutBottom">
        <div className="checkOutBottomHeader">
          <span>Cart Total</span><span><TbCurrencyNaira />{actualTotalAmount}.00</span>
        </div>
        <button className="checkOutBottomBtn"  onClick={handleAddToCart}>
          <span><IoBagCheckOutline /></span>
          <span><Link to='/AllCart' style={{color:'#FFFFFF'}}>Checkout </Link></span>
          </button>
        </div>
        <Link to='/shop'>CONTINUE SHOPPING</Link>
        {/* <button className="x"><BiX /></button> */}
     </main>
      
    </section>  
  )
}

export default ContinueCheckOut
