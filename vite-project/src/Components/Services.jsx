import { Link } from 'react-router-dom';
function Services(){
    return(
     <>
        <h1>Services.jsx</h1>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
              <Link to="/home">
                <button>Home</button>
                </Link>
    </>
    );
}
export default Services;