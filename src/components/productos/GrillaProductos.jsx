import React from 'react'
import ProductosCard from './ProductosCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const GrillaProductos = ({productos}) => {
    return(
        <div id='productos-contenedor'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 20 }}>

                {productos.map((producto) => {
                            return(
                                <Grid item xs={2} sm={4} md={4}>
                                    <ProductosCard producto={producto}></ProductosCard>
                                </Grid>
                            )
                        })}

                </Grid>
            </Box>
        </div>
    )
}

export default GrillaProductos