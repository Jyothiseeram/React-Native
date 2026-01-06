import { Link } from 'react-router-dom';
const Contact=()=>{
   return(
    <>
    <h1>Contact.jsx</h1>
    
          <Link to="/filenotfound">
            <button>FileNotFound</button>
          </Link>
          <Link to="/services">
            <button>Services</button>
            </Link>
            </>
   );
}

export default Contact;