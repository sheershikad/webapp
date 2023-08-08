import React, { useEffect,useState } from 'react';
import './Header.scss';

const Header = (props) => {
  const [name,setName]=useState("");
  useEffect(()=>{
    if(props.name){
    setName(props.name);
    }else{
      const user = localStorage.getItem('user');
      setName(user)
      console.log(user)
    }
  },[])
  return (
    <div className='header'>
    <p><span><b>logged in as : </b></span><span>{name}</span></p>
    </div>
  )
}

export default Header