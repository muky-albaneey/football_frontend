import { BiArrowBack } from "react-icons/bi"; 
import { BiX } from "react-icons/bi"; 
import { TbCurrencyNaira } from "react-icons/tb"; 
import { Link, NavLink } from "react-router-dom";
import { BiCart } from 'react-icons/bi';
import ButtonsExample from './Searching';
import { IoBagCheckOutline } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useCartStore } from "../store/cart";
import home from '../assets/home.jpg';
import away from '../assets/away.jpg';


const AllCart = () => {
  
  // State variables and functions from the cart store
  const { items, addToCart, removeFromCart, calculateTotalQuantity } = useCartStore();

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

  return (  
      <section className="shopWrapperMother">
         
     {itemsLength == 0 ?'' :<div id="c_details" >{itemsLength}</div>}
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
      <NavLink to='/kit'>KITS</NavLink>
        <NavLink to=''>TRAINING</NavLink>
        <NavLink to=''>MEN</NavLink>
        <NavLink to=''>WOMEN</NavLink>
        <NavLink to=''>KIDS</NavLink>
      </main>
     <main id="checkOutCon">
     {
            items.map((item, index)=>(
        <div className="checkOutTop " id="cartCheckOutTop" key={index}>
          <div className="checkOutTopLeft">
          <Container>
            <Row>      
              <Col xs={6} md={4}>
                <Image src={item.id == 'home' ? home : away} alt={item.id} key={index}/>
              </Col>
            </Row>
          </Container>
          </div>

          <div className="checkOutTopRight">
            <h1>ATHLETIC CLUB MIDLANDS HOME JERSEY 2024-25</h1>
          
   
                
                <main className="checkOutTopRightInfo">
                <div className="checkOutTopRightLeftInfo">
              
                  <div className="checkOutTopRightLeftInfoSelect">
                    <div className="checkOutTopRightLeftInfoSelectOne">
                      <span className="quality">Size</span>
                      <select
                        value={item.size}
                        onChange={(e) => addToCart(item.id, e.target.value, item.quantity)}
                      >
                        <option value="M">{item.size}</option>
                        <option value="S">S</option>
                        <option value="2XL">2XL</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                      </select>
                    </div>
                    <div className="checkOutTopRightLeftInfoSelectOne">
                      <span className="quality">Quantity</span>
                      <select
                        value={item.quantity}
                        onChange={(e) => addToCart(item.id, item.size, parseInt(e.target.value))}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                   
                  </div>
                </div>
               
              </main>
          
          </div>
          <button className="exit" onClick={()=>removeFromCart(item.id)}><BiX /></button>
        </div>
        
          ))
        }
        <div className="checkOutBottom" id={itemsLength ===0 ? `cartCheckOutBottomy`: `cartCheckOutBottom`}>
        <div className="checkOutBottomHeader">
          <span>Cart Total</span><span><TbCurrencyNaira /> {actualTotalAmount}.00</span>
        </div>
        {/* <button className="checkOutBottomBtn">
          <span><IoBagCheckOutline /></span>
          <span><Link to='/checkout' style={{color:'#FFFFFF'}}>Checkout </Link></span>
          </button> */}
           {itemsLength != 0 ? <button className="checkOutBottomBtn" >
          <span><IoBagCheckOutline /></span>
          <span><Link to='/AllCart' style={{color:'#FFFFFF'}}>Checkout </Link></span>
          </button> : <button className="checkOutBottomBtn" >
          <Link to='/kit'> Choose jersey <BiArrowBack /></Link></button>}
        </div>
        <Link to='/shop'>CONTINUE SHOPPING</Link>
        
     </main>
      
    </section>  
  )
}

export default AllCart
