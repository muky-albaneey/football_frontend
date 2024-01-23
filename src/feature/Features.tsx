import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './feature.css'
function Features() {
  return (
   <section id="featureWrapper">
         <Carousel id='carouselFeature'>
      <Carousel.Item id='featureItem'>
      <div className="leftFeatureMatcHeader">
                <h1>MATCHES</h1>
                <h5>NLO</h5>
                <h5>MATCHDAY 12</h5>
                <h5>2 February 2024</h5>
                <h5>16:30</h5>
            </div>
        <main id="featureItemContent">
          
            <div className="leftFeatureMatchDetails"></div>
            <div className="centerFeatureMatchDetails"></div>
            <div className="rightFeatureMatchDetails"></div>
        </main>
        <div className="leftFeatureMatcFooter">
            see all
        </div>
      </Carousel.Item>
      <Carousel.Item id='featureItem'>    
      {/* <img
           className="d-block w-100"
             src='./wallpaperflare_2.jpg'
           alt="First slide"
         />     */}
           {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item id='featureItem'>    
      {/* <img
           className="d-block w-100"
             src='./wallpaperflare_2.jpg'
           alt="First slide"
         />     */}
           {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
   </section>
  );
}

export default Features;