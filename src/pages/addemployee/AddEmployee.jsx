import React, { useState } from 'react';
import axios from 'axios';
import "./AddEmployee.scss";

import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const url="http://localhost:3001/employees"
  const [name ,setData] = useState("");
  const [city,setCity] = useState("");
  const nav = useNavigate()
  const send=()=>{
    if(city.length===0||name.length===0){
      alert("please fill the inputs")
    }
    else{
      axios.post(url,{name:name,city:city})
    nav("/home/table")
    }
  }
  return (
    <div className='add'>
    <input placeholder='enter name' onChange={(e)=>setData(e.target.value)} type="text"></input>
    <input placeholder='enter city' type="text" onChange={(e)=>setCity(e.target.value)}></input>
    <button onClick={()=>send()}>Submit</button>
    
    </div>
  )
}

export default AddEmployee