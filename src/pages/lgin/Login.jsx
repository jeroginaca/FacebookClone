import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Login = () => {

    const { login } = useContext(AuthContext);
    
    const handleLogin = () =>{
        login();
    }

  return (
   <div className="login">
    <div className="card">
        <div className="left">
            <h1>Heloo World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil, provident placeat incidunt minima odit. Voluptatibus ut optio earum culpa?</p>
            <span>Dont have an account</span>

           <Link to="/register">
            <button>Register</button>
           </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    </div>
   </div>
  )
}

export default Login
