import Carousel from 'react-bootstrap/Carousel';
import './feature.css';
import { Link } from 'react-router-dom';
import OTTASOLO_FC from '../assets/OTTASOLO_FC.jpg';
import BEYOND_LIMIT_FA_1 from '../assets/BEYOND-LIMIT-FA-1.jpg';
import Frame from '../assets/Frame.jpg';
import willbro from '../assets/willbro.jpg'
function Features() {
  
  return (
    <section id="featureWrapper">
      <Carousel id='carouselFeature' controls prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />} interval={5000} fade indicators={false}>
        <Carousel.Item id='featureItem'>
          <div className="leftFeatureMatcHeader">
            <h1>MATCHES</h1>
            <h5>NLO</h5>
            <h4>MATCHDAY 12</h4>
            <h5>2 February 2024</h5>
            <h5>16:30</h5>
          </div>
          {/* {
            stand.map((items)=>(
                    */}
          <main id="featureItemContent">
          
          <div className="leftFeatureMatchDetails fetureDetails">
          <img src={willbro} alt='' className="featuresImg"/>     

          </div>
          <div className="centerFeatureMatchDetails fetureDetails">
              <h1>VS</h1>
              <button className="featureTicketBtn">
                BUY TICKETS
              </button>
          </div>
          <div className="rightFeatureMatchDetails fetureDetails">
          <img src={Frame} alt='' className="featuresImg "/>    
          </div>         
    </main>
            {/* ))
                } */}
       
          <div className="leftFeatureMatcFooter">
          <Link to=''>See all matches</Link>
          </div>
        </Carousel.Item>
        <Carousel.Item id='featureItem'>
          <div className="leftFeatureMatcHeader">
            <h1>MATCHES</h1>
            <h5>NLO</h5>
            <h4>MATCHDAY 12</h4>
            <h5>2 February 2024</h5>
            <h5>16:30</h5>
          </div>
          <main id="featureItemContent">
            <div className="leftFeatureMatchDetails fetureDetails">
            <img src={Frame} alt="" className="featuresImg"/>     

            </div>
            <div className="centerFeatureMatchDetails fetureDetails">
                <h1>VS</h1>
                <button className="featureTicketBtn">
                BUY TICKET
                </button>
            </div>
            <div className="rightFeatureMatchDetails fetureDetails">
            <img src={BEYOND_LIMIT_FA_1} alt="" className="featuresImg"/>    
            </div>
          </main>
          <div className="leftFeatureMatcFooter">
          <Link to=''>See all matches</Link>
          </div>
        </Carousel.Item>
        <Carousel.Item id='featureItem'>
          <div className="leftFeatureMatcHeader">
            <h1>MATCHES</h1>
            <h5>NLO</h5>
            <h4>MATCHDAY 12</h4>
            <h5>2 February 2024</h5>
            <h5>16:30</h5>
          </div>
          <main id="featureItemContent">
            <div className="leftFeatureMatchDetails fetureDetails">
            <img src={OTTASOLO_FC} alt="" className="featuresImg"/>     

            </div>
            <div className="centerFeatureMatchDetails fetureDetails">
                <h1>VS</h1>
                <button className="featureTicketBtn">
                    BUY TICKET
                </button>
            </div>
            <div className="rightFeatureMatchDetails fetureDetails">
            <img src={Frame} alt="" className="featuresImg"/>    
            </div>
          </main>
          <div className="leftFeatureMatcFooter">
          <Link to=''>See all matches</Link>
          </div>
        </Carousel.Item>
        <Carousel.Item id='featureItem'>
          <div className="leftFeatureMatcHeader">
            <h1>MATCHES</h1>
            <h5>NLO</h5>
            <h4>MATCHDAY 12</h4>
            <h5>2 February 2024</h5>
            <h5>16:30</h5>
          </div>
          <main id="featureItemContent">
            <div className="leftFeatureMatchDetails fetureDetails">
            <img src={BEYOND_LIMIT_FA_1} alt="" className="featuresImg "/>     

            </div>
            <div className="centerFeatureMatchDetails fetureDetails">
                <h1>VS</h1>
                <button className="featureTicketBtn">
                    BUY TICKET
                </button>
            </div>
            <div className="rightFeatureMatchDetails fetureDetails">
            <img src={Frame} alt="" className="featuresImg"/>    
            </div>
          </main>
          <div className="leftFeatureMatcFooter">
          <Link to=''>See all matches</Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

// CustomPrevIcon and CustomNextIcon can be styled components or SVGs representing your custom icons
const CustomPrevIcon = () => <span className='arrowLeft' style={{ fontSize: '24px', color: 'rgb(149, 4, 4)', marginBottom: '-15rem', fontWeight: 'bold' }}>&lt;</span>;
const CustomNextIcon = () => <span className='arrowRight' style={{ fontSize: '24px', color: 'rgb(149, 4, 4)', marginBottom: '-15rem', fontWeight: 'bold' }}>&gt;</span>;

export default Features;
