
import './home.css';
import Search from './Search';
import UncontrolledExample from '../carousel/Carousel';


const Home = () => {
  return (
    <div className='homeContainer'>
      {/* <Header /> */}
      <section className="top_container">
       <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
       </div>
       <div className="carousel">
      <UncontrolledExample />
      </div>
      </section>
     
      <h1 className='acm_news'>ACM NEWS</h1>
      <section className="news_container">
        <div className="right">
          <div className="top_right_news">
            <img src='../../public/im_1.jpg' alt="" className='top_right_news_img' />
            <h4>
              <span>
              ACM FANS MAKE DONATION FOR PLATEU VICTIMS
              </span><br /><br />
              <span>
              The images and news from the attacked areas continue to leave us deeply
             concerned. For this reason, the ACM Fan Council are organizing a fundraising campaign at short    notice and would like to address the following appeal to the ACM fan community...
              </span>
            </h4>
            <button className="see_btn">CLICK TO SEE ALL ACM NEWS </button>
          </div>
          
        </div>
        <div className="left">
        <div className="top_left_news">
              <div className="top_left_news_items">
               <img src='./photo-1.jpg' alt="" className="top_left_news_img"/>
               <h5>
              <span>
              ABEL ZAKI JOINS TUDUN WADA FC ON LOAN
              </span><br />
              <span>
              A few days before the start of the season in the NLO, the Athletic club midlands have sent out midfielder Abel Zaki, 20, on loan to NLO side Tudun wada fc for the coming season. Before that, he extended his contract with  by ACM one year until the summer of 2024...
              </span>
            </h5>
          
              </div>
            
              <div className="top_left_news_items">
               <img src='./photo-2.jpg' alt="" className="top_left_news_img"/>
               <h5>
               <span>
               HANDBALL WOMEN STARTS SEASON PREPARITION
               </span><br />
               <span>
               The Athletic Club Midlands women's handball
            team met up in ACM PARK on Monday
            to mark the start of their preseason
            preparations. The ACM players who are in
            Lagos on Olympic duty will join the team at
            a later date...
               </span>
            </h5>
              </div>
                   
        </div>
        <div className="bottom_left_news">
        <div className="bottom_left_news_items">
               <img src='./photo-3.jpg' alt="" className="bottom_left_img"/>
               <h5>
              <span>
              FAN INFORMATION FOR TRAINING CAMP
                IN JOS
              </span><br />
              <span>
              This year, the ACM first-team squad will once
            again spend a week in Jos, from 23 to
            31 February, to prepare for the upcoming season.
            As part of the training camp, ACM will play
            friendly matches against Zeal minds FC and
            Likeminds FC. The fan representatives... 
              </span>
            </h5>          
              </div>
            
              <div className="bottom_left_news_items">
               <img src='./photo-4.jpg' alt="" className="bottom_left_img"/>
               <h5>
               <span>
               OUR GLOBE COLLECTION
               </span><br />
               <span>
               We are Athletic club Midlands! As ACM fans,this
            is the message you take out into the world.
          With the new globe collection, you are
          sending a very special burgundy and yellow
          greeting to the planet. The includes hoodies
          and T-shirts for men and women with...
               </span>
            </h5>
           
              </div>
        </div>
        </div>
     
      </section>
      <section className="moment_container">
        <div className="top_moment">
        <h1>ALL  FOR  OUR  MOMENT</h1>
        </div>
        <main>
        <div className="moment_img_con">         
         <img src='./im_2.jpg' alt="" className="moment_img"/>                   
          
         </div>
         <button className="moment_btn">SHOP </button>
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
            <span style={{marginBottom: '-3rem', textDecoration: 'underline', color:'red'}}>see all matches</span>
          </div>
          <div className="right">
          <img src='./Frame.jpg' alt="" className="matches_img"/>      
          </div>
        </main>
      </section>
      <section className="experience">
       <div className="exp_cover">
        <div className="exp"></div>
       </div>
      </section>
      <h1 className='exp_text'>
        EXPERIENCE <br />
        ACM <br />
        PARK <br />
        </h1>
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
     <div className="sectionWrapper">
     <h6>
    Our Sponsors
    </h6>
      <section className="patners">
         <img src="./RIDA-logo-1.jpg" alt="prologis" />
          {/* <img src="./Brails_logo.png" alt="tower" /> */}
          <img src="./Linear.svg" alt="equinix" />
          <img src="./download.jpg" alt="equinix" />
          {/* <img src="./realty.png" alt="realty" /> */}
      </section>
     </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
 