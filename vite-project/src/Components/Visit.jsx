import React from "react";
import './Visit.css'
class Visit extends React.Component{
    render(){
        return(
            <div className="card-body">
                <div className="user-icon">
                     <img className="jerry"
                     src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png" alt="Jerry Mouse" width="200"/>
                </div>
                <h1 className="heading">Jyothi Seeram</h1>
                <p className="para">Student of Aditya Engineering College</p>
            </div>

        )
    }
}

export default Visit;