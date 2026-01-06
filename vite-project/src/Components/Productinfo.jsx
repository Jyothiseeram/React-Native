import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function Productinfo()
{
const Data=[
    {
        id:1,
        brand:'Rare Rabbit',
        price:15000,
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id:2,
        brand:'Nyke',
        price:20000,
        description:'bbbbbbbbbbbbbbbbbbbbbbbbb'
    },
    {
        id:3,
    }
]
const ReceiveData=useParams();
const [mycard,setmycard]=useState(null)
useEffect(
    ()=>{
        Data.filter
    }
)

}
export default Productinfo;