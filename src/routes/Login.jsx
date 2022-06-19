import React from 'react'
import LoginForm from "../components/login/LoginForm"
import '../css/register.css'
const Login = () => {
    return(
        <div id='contenedor-formulario' className='contenedor-principal'>
            <h1>Login</h1>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login