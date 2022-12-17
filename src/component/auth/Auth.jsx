import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './logo-binar.png';
import './auth.css';

const Auth = () => {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='card-auth'>
            <div className='card-title'>
                Please Login!
            </div>
            <div className='content-card-auth'>
                    <label>Input your number :</label>
                    <br/>
                    <input type="number" />
                    <br/>
                    <button className='btn success' 
                    onClick={() => navigate(`/`)}>Login</button>
            </div>
        </div>   
    </div>
  )
}

export default Auth