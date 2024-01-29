import { AiOutlineSearch } from "react-icons/ai"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './search.css'
function ButtonsExample() {
  return (
    <section className='search_btn'>
     

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          <AiOutlineSearch className='searchBtn'/>
        </Button>
      </InputGroup>

    
    </section>
  );
}

export default ButtonsExample;