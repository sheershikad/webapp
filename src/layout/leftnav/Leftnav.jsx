import React from 'react';
import "./Leftnav.scss";
import {Link,Outlet} from 'react-router-dom';



const Leftnav = () => {
  return (
    <div className='left-nav'>
    <div className='nav'>
    <div> <Link to="/home/table">Table</Link></div>
    <div> <Link to="/home/addemployee">Add Employee</Link></div>
   
    </div>
    <div className='container'>
    <Outlet/>
    </div>
    </div>
  )
}

export default Leftnav