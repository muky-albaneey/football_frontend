import { TbCurrencyNaira } from "react-icons/tb"; 
import Frame from '../assets/Frame.jpg';
import './checkout.css'
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Checkout = () => {
  return (
    <>
        <section id="addressCheckoutWrapper">
        <main className="addressCheckoutHeaderCon">
            <header className="addressCheckoutHeader addressCheckoutHeaderOne">
                <img src={Frame} alt="" /> <h1>ACM SHOP</h1>
            </header>
            <header className="addressCheckoutHeader addressCheckoutHeaderTwo">
                <span>Secure Checkout</span> <span> <span><TbCurrencyNaira /></span> 23,000.00</span>
            </header>
        </main>
        <main className="logCheckOut">
            <h1 className="Already">Already have an account?</h1>
            <h1><Link to='/login'>LOGIN </Link> <span style={{color:'#000000'}}> or </span><Link to=''> REGISTER</Link> </h1>
        </main>
       <main className="addressCheckoutInputCon">
        <form action="">
        <div id="addressCheckoutInput">
            <input type="text" placeholder="First Name*"/>
            <input type="text" placeholder="Last Name*"/>
        </div>
        <div id="addressCheckoutInput">
            <input type="text" placeholder="Email**"/>
            <input type="text" placeholder="Phone*"/>
        </div>
        <div className="addressCheckoutInputAddress">
        <div id="addressCheckoutInput">
            <input type="text" placeholder="Address*"/>         
        </div>
        <div id="addressCheckoutInput">
            <input type="text" placeholder="Postal Code*"/>
            <input type="text" placeholder="City*"/>
            <input type="text" placeholder="State"/>
        </div>
        </div>

        <button className="addressCheckoutBtn">
        <span><IoBagCheckOutline /></span>
          <Link to=''>Continue Checkout</Link>
        </button>
        </form>
        
       </main>
       <h3>ALMOST THERE!</h3>
       <h3>REVIEW YOUR ORDER</h3>
    </section>
    </>
  )
}

export default Checkout