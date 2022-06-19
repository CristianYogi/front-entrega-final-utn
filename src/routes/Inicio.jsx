import React from 'react'
import CarouselOfertas from '../components/inicio/Carousel'
import "../css/inicio.css"
const Inicio = () => {
    return(
        <div id='contenedor-inicio' className='contenedor-principal'>
            <div id='contenedor-carousel'>
                <CarouselOfertas></CarouselOfertas>
            </div>
            <div id='contenedor-mejores-puntuados'>
                
            </div>

            <div id='contenedor-super-oferta'>

            </div>
        </div>
    )
}

export default Inicio