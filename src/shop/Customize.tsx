import { TbCurrencyNaira } from "react-icons/tb"; 
import { Link, NavLink } from "react-router-dom";
import { BiCart, BiX } from 'react-icons/bi';
import ButtonsExample from './Searching';
import { IoBagCheckOutline } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCartStore } from "../store/cart";
import home from '../assets/home.jpg';


const Customize = () => { 
    const {  setCartSize, setCartQ, quantity, size} = useCartStore();
    const handleSizeButtonClick = (newSize : string) => {
      setCartSize(newSize);
      console.log(size)
    };

    const handleQuantitySelect = (newQuantity : number) => {
      setCartQ(newQuantity);
      console.log(quantity)
    };
  return (  
      <section className="shopWrapperMother">
      
      <main id="trade">
        <button className='save_more'>SIGN UP  & SAVE 10%</button>
        <span className='cart'><BiCart className='cartItem' /></span>
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
                  <input type="text" placeholder="Jersey Name" />
                  <input type="text" placeholder="Jersey Number" />
                </div>
                <div className="checkOutTopRightLeftInfoSelect">
                  <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality">Size</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                  {size ? size : 'choose size'}
                    
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSizeButtonClick("M")}>M</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSizeButtonClick("S")}>S</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSizeButtonClick("2XL")}>2XL</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSizeButtonClick("XL")}>XL</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSizeButtonClick("L")}>L</Dropdown.Item>
                    
                  </Dropdown.Menu>
                </Dropdown>
                  </div>
                  <div className="checkOutTopRightLeftInfoSelectOne">
                  <span className="quality">Quantity</span>
                <Dropdown className="kitBoxLeftBtn kitBoxLeftBtnDrop">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                {quantity ? quantity : 'choose qty'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleQuantitySelect(1)}>1</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleQuantitySelect(2)}>2</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleQuantitySelect(3)}>3</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleQuantitySelect(4)}>4</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                  </div>
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
          <span>Cart Total</span><span><TbCurrencyNaira /> 23,000.00</span>
        </div>
        <button className="checkOutBottomBtn">
          <span><IoBagCheckOutline /></span>
          <span>Checkout</span>
          </button>
        </div>
        <Link to='/checkout'>CONTINUE SHOPPING</Link>
        <button className="x"><BiX /></button>
     </main>
    </section>  
  )
}

export default Customize
