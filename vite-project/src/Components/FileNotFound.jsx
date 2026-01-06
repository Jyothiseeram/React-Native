import { Link } from 'react-router-dom';
const FileNotFound=()=>{
    return(
        <>
        <h1>404 FileNotFound</h1>
        
              <Link to="/home">
                <button>Home</button>
              </Link>
              <Link to="/contact">
                <button>Contact</button>
                </Link>
        </>
    );
}

export default FileNotFound;