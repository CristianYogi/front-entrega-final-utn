import React from 'react'
import LoginForm from "../components/login/LoginForm"
import '../css/register.css'
const Login = () => {
    return(
        <div id='contenedor-formulario' className='contenedor-principal'>
            <h1>Login</h1>
            <LoginForm></LoginForm>
            <img src='https://i.imgur.com/C657SU2.jpeg'></img>
        </div>
    )
}

export default Login