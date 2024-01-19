
import './home.css';
import Search from './Search';
import UncontrolledExample from '../carousel/Carousel';
import News from '../news/News';
import ShapeExample from './Image';
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
          <ShapeExample />   
          </div>               
          
         </div>
         
        <h3>
           OUR NEW <br />
          HOME JERSEY<br />
           24/25
        </h3>
        </main>
        <div className="bottom_moment"></div>
      </section>
      <section className="matches">
        <div className="matche_info">
        <h2>MATCHES</h2>
        <h4>NLO</h4>
        <h6>MATCHDAY 12</h6>
        <h6>2 February 2024</h6>
        <h6>16:30</h6>
        </div>
        <main>
          <div className="left">
            <img src='./willbro.jpg' alt="" className="matches_img"/>      
          </div>
          <div className="center">
            <h2>VS</h2>
            <button className="matches_btn">BUY TICKETS</button>
            <Link to='/' style={{marginBottom: '-3rem', textDecoration: 'underline', color:'rgb(149, 4, 4)'}} className='match_link'>see all matches</Link>
          </div>
          <div className="right">
          <img src='./Frame.jpg' alt="" className="matches_img"/>      
          </div>
        </main>
      </section>
      <section className="experience">
       <div className="exp_cover">
        <div className="exp">
        <h1 className='exp_text'>
        EXPERIENCE <br />
        ACM <br />
        PARK <br />
        </h1>
        </div>
       </div>
      </section>
    
        <section className="experience exp_sec">
       <div className="exp_cover text_cover">
        <h1 style={{textAlign: 'center'}}>ACM NEWSLETTER</h1>
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
     {/* <div className="sectionWrapper">
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
        
          
      </section>
     </div>
       */}
    </div>
  )
}

export default Home
 
