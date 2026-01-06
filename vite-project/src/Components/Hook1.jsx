import React, { useState } from "react";

const Hook=()=>{
     
const [Data,setData]=useState(0);
    const incre=()=>{
            setData(Data+1);
    }
    const decre=()=>{
      setData(Data-1);
    }
  

    
  return(
    <>
    <button onClick={incre}>incremenet</button>
    <button onClick={decre}>decrement</button>
    <h1>Count:{Data}</h1>
    </>
  );


    
}

export default Hook;

 