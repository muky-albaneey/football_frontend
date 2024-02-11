// import React from 'react'
import Frame from '../assets/Frame.jpg'
import { NavLink } from "react-router-dom"
import './payment.css';

const Payment = () => {
  return (
    <section className='paymentWrapper'>
       <div className="logHeader signHeader">
      <div className="logLeft">
        <NavLink  to='/'><img src={Frame} alt="" className='Frame FrameLog'/></NavLink >
            
        </div>
        <div className="logRight logRightSign">AC MIDLANDS</div>
      </div>

      <div className="secureHeader">Secure Checkout</div>
      <div id="shippingAddress">
        <span>Jon Doe</span><span>7 Lagos Street</span><span>Lagos, LA NG</span><span>EDIT</span>
      </div>
      <div id="shippingHandling">
        <h1>Shipping & Handling</h1>
       <div className="shipHandlingItems">
       <input type="radio" name=""  /> <span>Standard shipping: 1-3 Business Days (    3,000.00)</span>
       </div>
       <div className="shipHandlingItems">
       <input type="radio" name=""  /> <span>Express shipping: 1 Business Days(    5,000.00)</span>
       </div>
      </div>
    </section>
  )
}

export default Payment
