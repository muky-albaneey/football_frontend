import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './news.css';

function BasicExample() {
  return (
    <Card className='card_2'>
      <Card.Img variant="top" src='./im_1.jpg' />
      <Card.Body>
        <Card.Title> ACM FANS MAKE DONATION FOR PLATEAU VICTIMS</Card.Title>
        <Card.Text >
        The images and news from the attacked areas continue to leave us deeply
concerned. For this reason, the ACM Fan Council are organizing a fundraising campaign at short notice and would like to address the               following      appeal to the ACM fan community...
        </Card.Text>
        <Button className='btnNews' style={{backgroundColor: 'rgb(149, 4, 4)'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;