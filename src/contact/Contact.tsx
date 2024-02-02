import { CiLocationOn } from "react-icons/ci"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { GiRotaryPhone } from "react-icons/gi"; 
import Form from 'react-bootstrap/Form';
import './contact.css'
import Button from 'react-bootstrap/esm/Button';

function Contact() {
  return (
    <section id="formWrapper">
        <h3>Contact Form</h3>
        <div id="formCon">
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">        
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">        
        <Form.Control type="text" placeholder="Surname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">        
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">        
        <Form.Control type="text" placeholder="Telephone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">        
      <Form.Select aria-label="Default select example">
      <option>Interested In</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">        
        <Form.Control as="textarea" placeholder="Message (optional)" rows={3} className="textArea" />
      </Form.Group>

        <div className="privacy">
        <div className="agreement">
      The undersigned acknowledges that personal data  will be processed for the purposes of <span>privacy policy</span>, as well as for statistical purposes on anonymized data.
      </div>
        </div>
      <Button type="submit" id="contactUsBtn">SEND</Button>
      
    </Form>
    </div>
    <div className="infoContactUs">
        <div className="contactFoot"><span><GiRotaryPhone /></span> <span>+234-**********</span></div>
        <div className="contactFoot"><span><AiOutlineMail /></span><span>Mail@mail.com</span></div>
        <div className="contactFoot"><span></span><CiLocationOn /><span>Lorem ipsum</span></div>
    </div>
    </section>
  );
}

export default Contact;