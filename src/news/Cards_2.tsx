import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './news.css';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Card id='card_2'>
      <Card.Img variant="top" id='imgCard' src='./im_1.jpg' />
      <Card.Body>
        <Card.Title id='cardTitle'> ACM FANS MAKE DONATION FOR PLATEAU VICTIMS</Card.Title>
        <Card.Text  id='cardTextDesc'>
        The images and news from the attacked areas continue to leave us deeply
concerned. For this reason, the ACM Fan Council are organizing a fundraising campaign at short notice and would like to address the               following      appeal to the ACM fan community...
        </Card.Text>
        <Button id='btnNews' >
          <Link to='/'  style={{color: 'whitesmoke', textDecoration: 'none'}}>CLICK TO SEE ALL ACM NEWS </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;