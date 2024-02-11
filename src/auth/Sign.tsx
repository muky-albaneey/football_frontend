import { NavLink } from 'react-router-dom'
import Frame from '../assets/Frame.jpg'
const Sign = () => {
  return (
    <section id='SignCon'>
      <div className="signHeader">
      <NavLink  to='/'><img src={Frame} alt="" className='Frame FrameLog'/></NavLink >
        <h1>AC MIDLANDS</h1>
      </div>
      <div className="signHeader_two"></div>
      <div className="signTop">Sign up to ACM</div>
      <div className="signInput">
        <input type="text" placeholder='*Username (Email)' />
        <span>
        You will receive a confirmation email at the address you provided. Fields marked with * are mandatory.
        </span>
      </div>
      <div className="signInput">
        <input type="text" placeholder='*First Name' />
        <input type="text" placeholder='*Last Name' />
      </div>
      <h3>My Privacy Settings</h3>
      <div className="read">
        <p>Read the  full privacy disclaimer here</p>
        <h5>
        The personal data provided here is necessary to initiate the registration process and will be deleted if the process is not completed  within 48 hours  of receiving the email. Registration is allowed for all users aged 18 and above.
        </h5>
      </div>
    </section>
  )
}

export default Sign
