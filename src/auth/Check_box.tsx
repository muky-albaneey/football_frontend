import Form from 'react-bootstrap/Form';
import './auth.css';

function CheckApiExample() {
  return (
   <>
       {/* <label className="container">
  One
  <input type="checkbox" checked={true} />
  <span className="checkmark"></span>
</label> */}
<label className="container">
<span style={{marginLeft : '2rem'}}>For review of  the information  (mandatory  to activate the registration) </span>
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">
    <span style={{marginLeft : '2rem'}}>
    Please send me some marketing communications  including latest products , competitions and partner offers.
    </span>
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

   </>
  );
}

export default CheckApiExample;
