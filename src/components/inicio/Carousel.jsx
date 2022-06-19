import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const CarouselOfertas = (props) =>
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        // indicatorIconButtonProps={{
        //     style: {
        //         padding: '10px',   
        //     }
        // }}
        indicatorContainerProps={{
            style: {
                marginTop: '30px'
            }
    
        }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy4REK9yBAhdNESXa1GhV72ppOTZ2TYRo0Q&usqp=CAU)'}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarouselOfertas