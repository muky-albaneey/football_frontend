// import { BiCart } from "react-icons/bi"; 
import Shoping from './Shoping'
import './shop.css';
// import Searching from "./Searching";
import { NavLink } from "react-router-dom";
import Shoping_two from "./Shoping_two";

const Shop = () => {
  return (
    <section className="shopWrapperMother">
      {/* <Searching /> */} 
      <main id="navs">
      <NavLink to=''>KITS</NavLink>
        <NavLink to=''>TRAINING</NavLink>
        <NavLink to=''>MEN</NavLink>
        <NavLink to=''>WOMEN</NavLink>
        <NavLink to=''>KIDS</NavLink>
      </main>

      <section className='shopCon'>
      <Shoping_two />
      <Shoping />      
      {/* <span className='cart'><BiCart /></span> */}
    </section>
    </section>
  )
}

export default Shop
