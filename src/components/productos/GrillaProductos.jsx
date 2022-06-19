import React from 'react'
import ProductosCard from './ProductosCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const GrillaProductos = () => {
    return(
        <div id='productos-contenedor'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 20 }}>

                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>

                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>

                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <ProductosCard></ProductosCard>
                    </Grid>


                </Grid>
            </Box>
        </div>
    )
}

export default GrillaProductos