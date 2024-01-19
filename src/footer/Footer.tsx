import { FaTelegramPlane } from "react-icons/fa"; 
import { FaTiktok } from "react-icons/fa"; 
import { BsWhatsapp } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { BiX } from "react-icons/bi"; 
import './footer.css'

const Footer = () => {
  return (
   <div className="fooWrapper">
    <div className="sectionWrapper">
     <h6 >
    Our Sponsors
    </h6>
      <section className="patners">
         <div className="p_sec_1">
         <img src="./RIDA-logo-1.jpg" alt="prologis" />
          <img src="./bitnob-logo.png" alt="tower" />
         </div>
         
         <div className="p_sec_2">
         <img src="./Linear.svg" alt="equinix" />
          <img src="./download.jpg" alt="equinix" />
         </div>
        
          {/* <img src="./realty.png" alt="realty" /> */}
      </section>
     </div>
     <div className='foot_container'>
     <div className="social">
      <div className="icons">
      <BiX /><BsFacebook /><BsWhatsapp /><FaTiktok /><FaTelegramPlane />
      </div>
    </div>
      <div className="foo_right">
      <h4>Athletic Club Midlands</h4>
      </div>
      
      <div className="foo_left">
        <div>Imprint</div>
        <div>Data Protection</div>
        <div>Terms of Use</div>
        <div>FAQ</div>
        <div>Help</div>
        <div>Contact</div>
        <div>Infos</div>
        <div>Blog</div>
        <div>Officials</div>
      </div>
    </div>
   
   </div>
  )
}

export default Footer
