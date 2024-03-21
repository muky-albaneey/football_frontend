import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

type image = {
  img :string
}

function ShapeExample({img} : image){
  return (
    <Container>
      <Row>
        <Col xs={6} md={2} >
          <Image src={img} rounded className='imgAds' />
        </Col>
      </Row>
    </Container>
  );
}
{/* <div className='heroImageWrapper'> 
          <div className="heroImageContent">
            <img
              className=""
              id='imgHero1'
              src={hero_1}
              alt="First slide"
            />
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>  */}
        
export default ShapeExample;