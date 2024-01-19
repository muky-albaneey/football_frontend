import { BiCart } from "react-icons/bi"; 
import Shoping from './Shoping'
import './shop.css';
import Searching from "./Searching";
import { NavLink } from "react-router-dom";

const Shop = () => {
  return (
    <section className="shopWrapperMother">
      <Searching />
      <nav>
        <div>
        <NavLink to=''>KITS</NavLink>
        <NavLink to=''>TRAINING</NavLink>
        <NavLink to=''>MEN</NavLink>
        <NavLink to=''>WOMEN</NavLink>
        <NavLink to=''>KIDS</NavLink>
        </div>
      </nav>
      <section className='shopCon'>
      <Shoping />
      <span className='cart'><BiCart /></span>
    </section>
    </section>
  )
}

export default Shop
