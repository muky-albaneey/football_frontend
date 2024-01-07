import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
  return (
    <div style={{width: '50%'}}>
      

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="football's news"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark" id="button-addon2" style={{color:'red'}}>
          Button
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;