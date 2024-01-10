import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={2} >
          <Image src='./im_2.jpg' rounded className='imgAds' />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;