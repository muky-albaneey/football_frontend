import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './data.json'
import React from 'react';

function GridExample() {

  const [shonw, setShown] =React.useState(true)
  function isShown(){
    setShown(shonw=> !shonw)
  }
  return (
    <Row xs={1} md={2} className="g-4">
      {data.map((items, index) => (
        <Col key={index}>
          <Card className='card'>
            <Card.Img variant="top" src={items.img} style={{height: '15rem'}}/>
            <Card.Body>
              <Card.Title>{items.title}  <Card.Subtitle className='show' style={{color: "rgb(149, 4, 4)", fontWeight: 'bold'}} onClick={isShown}>see more</Card.Subtitle></Card.Title>
              <Card.Text className={shonw ?`hide` : 'latest_shown'} >
               {
                items.text
               }
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;