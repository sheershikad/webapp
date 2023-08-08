import axios from "axios";
import "./Table.scss";
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [JsonData,setJsondata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/employees").then(e=>setJsondata(e.data))
    },[])
    var i =1;
    const DisplayData=JsonData?.map(
        (info)=>{
            return(
                <tr key={info.name}>
                <td>{i++}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )
  return (
    <div className='table'>
    <table className='center'>
    <thead>
        <tr>
        <th>Sr.NO</th>
        <th>Name</th>
        <th>City</th>
        </tr>
    </thead>
    <tbody>
        {DisplayData}
    </tbody>
   </table>
      
    </div>
  )
}

export default Table
