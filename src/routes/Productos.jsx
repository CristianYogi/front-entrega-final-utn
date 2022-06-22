import React from 'react'
import "../css/productos.css"
 import BuscadorProductos from '../components/productos/BuscadorProductos'
 import GrillaProductos from '../components/productos/GrillaProductos'
import { useEffect } from 'react'
import { Button } from '@mui/material'


const Productos = () => {
    
    const [productos, setProductos] = React.useState(null)

    useEffect(() => {
        fetch("https://apideploy-final.herokuapp.com/productos")
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            if(!json.status){
                setProductos(json)
            }
            
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <main className='contenedor-principal'>
            <BuscadorProductos></BuscadorProductos>
            {productos != null && <GrillaProductos productos={productos}></GrillaProductos>}
        </main>
    )
}

export default Productos