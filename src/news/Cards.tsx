import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './data.json';
import React from 'react';

function GridExample() {
  
  const [cardStates, setCardStates] = React.useState(data.map(() => true));

  
  const toggleCard = (index : number) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <Row xs={1} md={2} className="g-4">
      {data.map((items, index) => (
        <Col key={index}>
          <Card id='card'>
            <Card.Img variant="top" src={items.img} id='imgCard_2' />
            <Card.Body>
              <Card.Title id='cardTitle'>
                {items.title}
                <Card.Subtitle
                  className='show'
                  style={{ color: "rgb(149, 4, 4)", fontWeight: 'bold' }}
                  onClick={() => toggleCard(index)}
                >
                  {cardStates[index] ? 'see more' : 'hide text'}
                </Card.Subtitle>
              </Card.Title>
              <Card.Text id='desc_2' className={cardStates[index] ? `hide` : 'latest_shown'} >
                {items.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
