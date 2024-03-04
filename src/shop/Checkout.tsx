import { TbCurrencyNaira } from "react-icons/tb"; 
import Frame from '../assets/Frame.jpg';
import './checkout.css'
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cart";



const Checkout = () => {
    
  // State variables and functions from the cart store
  const { items, calculateTotalQuantity } = useCartStore();

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
    <>
     {itemsLength == 0 ?'' :<div id="c_details" >{itemsLength}</div>}
        <section id="addressCheckoutWrapper">
        <main className="addressCheckoutHeaderCon">
            <header className="addressCheckoutHeader addressCheckoutHeaderOne">
                <img src={Frame} alt="" /> <h1>ACM SHOP</h1>
            </header>
            <header className="addressCheckoutHeader addressCheckoutHeaderTwo">
                <span>Secure Checkout</span> <span> <span><TbCurrencyNaira /></span> {actualTotalAmount}.00</span>
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
