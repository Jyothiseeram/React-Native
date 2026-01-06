import React from "react";
import { useState,useEffect } from "react";
function Base()
{
  const GetData=(event)=>{
  const file=event.target.files[0]
  const reader=new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=>{
    setImagePath(reader.result)
  }

  }
return(
   <input className="myimage" type="file" onChange={(event)=>GetData}></input>
)

  
}

export default Base;