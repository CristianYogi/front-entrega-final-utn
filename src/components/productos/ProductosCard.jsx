import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductosCard = () => {
    return (
        <Card sx={{ maxWidth: 250, maxHeight:350}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/800px-Portrait_of_an_Iguana.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography style={{color: '#2a9d8f'}} variant='h6'>30.000$</Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarcticaawfwafwafawfawfwafawawfawfawfawfwawfafawfawffwafaw
                    afawfwafwafawfwafawfafawfwafwafawfawf
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
    );
}

export default ProductosCard
