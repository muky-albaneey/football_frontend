import { FcGoogle } from "react-icons/fc"; 
import { Link } from 'react-router-dom'
import Frame from '../assets/Frame.jpg'
import './auth.css'
const Login = () => {
  return (
    <section className='loginWrapper'>
      <div className="logHeader">
        <div className="logLeft">
            <img src={Frame} alt="" className='Frame FrameLog'/>
        </div>
        <div className="logRight">AC MIDLANDS</div>
      </div>
      {/* <div className="logInput"> */}
        <input type="text"  placeholder='Username (Email)'/>
        <input type="password" placeholder='Password' />
      {/* </div> */}
      <span>Forgot your password? <Link to='#'>Click here</Link></span>
      <button className="logBtn">LOGIN</button>
      <span className="redC">Not registered? <Link to='#'>Join us</Link></span>
      <span>0r continue with</span>
      <button className="googleBtn">
        <div className="innerGoogle">
        <FcGoogle className='gSize'/>
        <span>GOOGLE</span>
        </div>
      </button>
      <span className="redC">
      Privacy policy and Terms of service
      </span>
    </section>
  )
}

export default Login
