import React from 'react'
import RegisterForm from '../components/register/RegisterForm'
import '../css/register.css'
const Register = () => {
    return(
        <div id='contenedor-formulario' className='contenedor-principal'>
            <h1>Registrarse</h1>
            <RegisterForm></RegisterForm>
        </div>
    )
}

export default Register