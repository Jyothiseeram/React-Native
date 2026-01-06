import React from "react";
import "../Components/Variable.css";
import Cards from "../data/card";

const Variable=(prompt)=> {
  console.log(prompt)
    return (
      <>
      
          <div className="card" >
            <div className="logo">
              <img src={prompt.data.image} alt={prompt.data.brand} />
            </div>
            <div className="info">
              <div className="price">Price: {prompt.data.price}</div>
              <div className="brand">Brand: {prompt.data.brand}</div>
            </div>
          </div>
    
      
      </>
    )
  }


export default Variable;
