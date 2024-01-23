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

export default ShapeExample;