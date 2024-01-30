
import './home.css';
import Search from './Search';
import UncontrolledExample from '../carousel/Carousel';
import News from '../news/News';
import ShapeExample from './Image';
import Features from '../feature/Features';
import Standing from '../feature/Standing';
import home from '../assets/home.jpg';
import away from '../assets/away.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeContainer'>
     
      <section className="top_container">
      
       <div className="carousel">
      <UncontrolledExample />
      </div>
      </section>
      
      <h1 className='acm_news'>ACM NEWS</h1>
     
      <News />
      <section className="moment_container">
        <div className="top_moment">
        <h1>ALL  FOR  OUR  MOMENT</h1>
        </div>
        <main>
        <div className="moment_img_con">         
          <div>
          <ShapeExample img={home}/>   
          </div>             
          <button className="jerseyBtn"><Link to='kit'>shop now</Link></button>            
         </div>
         <div className="moment_img_con moment_img_con_2">         
          <div>
          <ShapeExample img={away}/>   
          </div>             
          <button className="jerseyBtn"><Link to='kit'>shop now</Link></button>            
         </div>         
        <h3>
           OUR NEW  JERSEY<br />  
           24/25
        </h3>
        </main>
        <div className="bottom_moment"></div>
      </section>
      
      <section className="matches">
      <section className="features">
        <div className="featureLeft">
         <Features />
        </div>
        <div className="featureRight">
        <Standing />
        </div>
      </section>    
        
      </section>
      <section className="experience">
       <div className="exp_cover">
        <div className="exp">
        <h1 className='exp_text'>
        EXPERIENCE <br />
        ACM PARK
        </h1>
        <button id="exp_btn">TICKET SHOP</button>
        </div>
       </div>
      </section>
    
        <section className="experience exp_sec">
       <div className="exp_cover text_cover">
        <h1>ACM NEWSLETTER</h1>
        <div className="exp_cover_con">
        <div className="exp_left">
          <p>
          Stay up to date - with the ACM newsletter! Want to subscribe? <br /> Then simply enter your e-mail address and click on the mail symbol! Enjoy!
          </p>
          <p>
          By subscribing I agree that ACM (ATHLETIC CLUB MIDLANDS) may share my data between the aforementioned organisational divisions, jointly process my data and use it for communication purposes, analytical purposes, and advertising purposes via E-Mail. Advertisements may contain, for example, ticket offers, special offers and other products and/or business services (e.g. fan items and events) provided by ACM, as well as by ACM’s official partners. This agreement can be revoked at any time in the newsletter, by an informal letter in the post or by an e-mail sent to support@acm.com
          </p>
        </div>
        <div className="exp_right">
          <Search />
        </div>
        </div>
       </div>
      </section>
    
    </div>
  )
}

export default Home
 
