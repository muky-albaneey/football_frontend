import Carousel from 'react-bootstrap/Carousel';
import './corousel.css'

function UncontrolledExample() {
  return (
    <Carousel pause='hover'>
      <Carousel.Item>
      <img
           className="d-block w-100"
             src='./wallpaperflare_2.jpg'
           alt="First slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100"
             src='./wallpaperflare_2.jpg'
           alt="First slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
           className="d-block w-100"
             src='./wallpaperflare_2.jpg'
           alt="second slide"
         />
        <Carousel.Caption>
          
          <p>AC MIDLANDS: <br />UNVEILING OUR STADIUM</p>     </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default UncontrolledExample;