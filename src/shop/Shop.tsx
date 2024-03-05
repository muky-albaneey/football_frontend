// import { BiCart } from "react-icons/bi"; 
import Shoping from './Shoping'
// import './shopping.css';
// import Searching from "./Searching";
import { NavLink } from "react-router-dom";
import Shoping_two from "./Shoping_two";
// import Frame from '../assets/Frame.jpg';
import { BiCart } from 'react-icons/bi';
import ButtonsExample from './Searching';

const Shop = () => {
  return (  
      <section className="shopWrapperMother">
      
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
      <NavLink to=''>KITS</NavLink>
        <NavLink to=''>TRAINING</NavLink>
        <NavLink to=''>MEN</NavLink>
        <NavLink to=''>WOMEN</NavLink>
        <NavLink to=''>KIDS</NavLink>
      </main>
      <div className='navs_2'>
        {/* <ButtonDarkExample /> */}
      </div>
      <section className='shopCon'>
      <Shoping_two />
      <Shoping />      
      
    </section>
    </section>  
  )
}

export default Shop
