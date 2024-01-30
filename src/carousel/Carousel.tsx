import Carousel from 'react-bootstrap/Carousel';
import wallpaperflare_2 from '../assets/wallpaperflare_2.jpg'
import OIP_carousel from '../assets/OIP_carousel.jpg'
import carousel_one from '../assets/carousel_one.jpg'
import './corousel.css'

function UncontrolledExample() {
  return (
    <Carousel pause='hover'>
      <Carousel.Item>
      <img
           className="d-block w-100"
             src={wallpaperflare_2}
           alt="First slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100"
             src={OIP_carousel}
           alt="First slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
           className="d-block w-100"
             src={carousel_one}
           alt="second slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>     </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default UncontrolledExample;