import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate} from 'react-router-dom';
import "./Login.scss";


const Login = () => {
  const navigate = useNavigate();
    const { register, handleSubmit , formState: { errors }} = useForm();
    const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('user',data.email)
    navigate('/home',{state:{data:data}} );
    };
  return (
    <div className='loginpage'>
     <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <input placeholder='Enter Email' type="email" {...register("email",{ required: true })}/>
            <div className="error">{errors.email && <span> <b>*Please Enter Email</b></span>}</div>
          </div>
          <div className="password">
            <input placeholder='Enter Password' type="password" {...register("password",{ required: true })} />
            <div className="error">{errors.password && <span> <b>* Please Enter Password</b></span>}</div>
          </div>
            <div className="submit-button">
            <button>Submit</button>
            </div> 
      </form>
    </div>
  )
}

export {Login};


