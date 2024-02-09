import { FaTelegramPlane } from "react-icons/fa"; 
import { FaTiktok } from "react-icons/fa"; 
import { BsWhatsapp } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { BiX } from "react-icons/bi"; 
import Frame from '../assets/Frame.jpg'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className="fooWrapper">
    <div className="sectionWrapper">
     <h6 >
     <Link to='partners' className='p_l_t'> Our Sponsors</Link>
   
    </h6>
      <section className="patners">
         <div className="p_sec_1">
         <img src="./RIDA-logo-1.jpg" id="rida" alt="prologis" />
          <img src="./bitnob-logo.png" id="bitnob" alt="tower" />
         </div>
         
         <div className="p_sec_2">
         <img src="./Linear.svg" id="Linear" alt="equinix" />
          <img src="./download.jpg" id="download" alt="equinix" />
         </div>
          
      </section>
     </div>
     <div className='foot_container'>
      <div className="teamLogo">
        <img src={Frame} alt="" />
        <h1>AC MIDLANDS ON SOCIAL MEDIA</h1>
      </div>
     <div className="social">
      <div className="icons">
     <div>
     <BiX className='iconBg' />
      </div> 
      <div>
      <BsFacebook className='iconBg' />
      </div>
      <div>
      <BsWhatsapp className='iconBg' />
      </div>
      <div>
      <FaTiktok className='iconBg' />
      </div>
      <div>
      <FaTelegramPlane className='iconBg' />
      </div>
      </div>
      
    </div>
    <hr style={{width:'95%',fontSize: '2rem', fontWeight: 'bold', margin: '0 auto', color: '#FFFFFF',marginBottom: '.5rem'}} />
      <div className="combineF">
      <div className="foo_right">
      <h4><span>Copyright © 2024</span> <span>Athletic Club Midlands</span></h4>
      </div>
      
      <div className="foo_left">
        <div>
          <h6><Link to='partners' className='p_l'>Partners</Link> </h6>
          <h6>Transfer windows</h6>          
        </div>
        <div>
        <h6>Terms of Use</h6>
          <h6>Privacy</h6>
          
        </div>       

        <div>
          <h6>FAQ</h6>
          <h6>Help</h6>
        </div>
        <div></div>
        
      </div>
      </div>
    </div>
   
   </div>
  )
}

export default Footer
