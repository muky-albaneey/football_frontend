// import { FaDiscord } from "react-icons/fa"; 
// import { AiOutlineInstagram } from "react-icons/ai"; 
// import { BiX } from "react-icons/bi"; 
import { ImLocation } from "react-icons/im"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsFillTelephoneXFill } from "react-icons/bs"; 
import './contact.css'

const Contact = () => {
  return (
    <section className='contactWrapper'>
      <h1 className='conTopNote'>
      Contact Us
      </h1>
      <h6>Any question or remarks? Just write us a message!</h6>
      <main className="contactCon">
        <div className="contactConRight">
           <article className="conRightText">
           <h1>
                Contact Information
            </h1>
            <h6>
                Say something to start a live chat!
            </h6> 
           </article>
           <div className="centerCon">
            <div className="phone">
                <span><BsFillTelephoneXFill /></span><span>+234 *** *******</span>
            </div>
            <div className="mail">
                <span><AiOutlineMail /></span><span>Lorem ipsum</span>
            </div>
            <div className="address">
                <span><ImLocation /></span><span>Lorem ipsum ipsum lorem</span>
            </div>
           </div>
           {/* <div className="bottomCon">
            <BiX style={{color : 'whitesmoke'}}/> <AiOutlineInstagram /><FaDiscord />
           </div> */}
        </div>
        <div className="contactConLeft">
            <form action="">
                <div className="inputs">
                    <input type="text" name="" id=""  placeholder="First Name"/>
                    <input type="text" name="" id=""  placeholder="Last Name"/>
                </div>
                <div className="inputs">
                    <input type="mail" name="" id=""  placeholder="Email"/>
                    <input type="number" name="" id=""  placeholder="Phone Number"/>
                </div>
                <div className="selects">
                    <h2 className="conTopNote_2">Select Subject?</h2>
                    <div className="radioCon">
                        <div className="itemRad">
                        <input type="radio" name="" id="" /> <span>General Inquiry</span>
                        </div>
                        <div className="itemRad">
                        <input type="radio" name="" id="" /> <span>General Inquiry</span>
                        </div>
                        <div className="itemRad">
                        <input type="radio" name="" id="" /> <span>General Inquiry</span>
                        </div>
                    </div>
                </div>
                <div className="inputText">
                    <input type="text" name="" id=""  placeholder="Write your message.."/>                    
                </div>
            </form>
        </div>
      </main>
    </section>
  )
}

export default Contact
