import Carousel from 'react-bootstrap/Carousel';
import './feature.css';
import { Link } from 'react-router-dom';
import fcb from '../assets/fcb.png';
import Real_madrid from '../assets/Real_madrid.png';
import Frame from '../assets/Frame.jpg';
import bayern from '../assets/bayern.png';

function Features() {
  
  return (
    <section id="featureWrapper">
      <Carousel id='carouselFeature' controls prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />} interval={9000} fade indicators={false}>
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
          <img src={fcb} alt='' className="featuresImg imgAway"/>     

          </div>
          <div className="centerFeatureMatchDetails fetureDetails">
              <h1>VS</h1>
              <button className="featureTicketBtn">
                  buy tikect
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
                    buy tikect
                </button>
            </div>
            <div className="rightFeatureMatchDetails fetureDetails">
            <img src={Real_madrid} alt="" className="featuresImg imgAway"/>    
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
            <img src={bayern} alt="" className="featuresImg imgAway"/>     

            </div>
            <div className="centerFeatureMatchDetails fetureDetails">
                <h1>VS</h1>
                <button className="featureTicketBtn">
                    buy tikect
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
