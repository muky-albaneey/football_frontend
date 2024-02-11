import { Link, NavLink } from 'react-router-dom'
import Frame from '../assets/Frame.jpg'
import CheckApiExample from './Check_box'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './auth.css';

const Sign = () => {
  return (
    <section id='SignCon'>
      <div className="logHeader signHeader">
      <div className="logLeft">
        <NavLink  to='/'><img src={Frame} alt="" className='Frame FrameLog'/></NavLink >
            
        </div>
        <div className="logRight logRightSign">AC MIDLANDS</div>
      </div>
      <div className="signHeader_two">
      <DropdownButton id="dropdown-basic-button" title="English(US)" variant="transparent">
      <Dropdown.Item href="#/action-1">FRENCH</Dropdown.Item>
      {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    </DropdownButton>
    
      </div>
      <div className="signTop">Sign up to ACM</div>
      <form action="">
      
      <div className="signInput">
        <input type="text" placeholder='*Username (Email)' />
        <div className='inputTextNote'>
        You will receive a confirmation email at the address you provided. Fields marked with * are mandatory.
        </div>
      </div>
      <div className="signInput">
        <input type="text" placeholder='*First Name' />
        <input type="text" placeholder='*Last Name' />
      </div>
      
      <h2>My Privacy Settings</h2>
      <div className="read">
        <Link to=''>Read the  full privacy disclaimer here</Link>
        <p>
        The personal data provided here is necessary to initiate the registration process and will be deleted if the process is not completed  within 48 hours  of receiving the email. Registration is allowed for all users aged 18 and above.
        </p>
        <div >
            <CheckApiExample />
        </div>
      </div>
      <button className="checkBoxBtn">REGISTER</button>
      </form>
    </section>
  )
}

export default Sign
