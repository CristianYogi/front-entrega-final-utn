import React from 'react'
import ProductsForm from '../components/productos/ProductsForm'
import RegisterForm from '../components/register/RegisterForm'
import '../css/productoForm.css'

const NewProduct = () => {
    return(
        <div id="contenedor-productos" className='contenedor-principal'>
            <h1>Nuevo Producto</h1>
            <ProductsForm></ProductsForm>
        </div>
    )
}

export default NewProduct