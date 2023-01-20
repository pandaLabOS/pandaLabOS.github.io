import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';

export default function CoffeeCard(props) {
    const {image, title, description, price, handleClick} = props;

    const addToCart = {
        backgroundColor: "#FE6601",
        color: "white",
        border: "1px #FFFFFF solid",
        fontSize: "1em",
        display: "flex", 
        alignItems: "center"
    }
    
    return (
        <Card style={{width: '15rem', margin: '5px'}}>
            <Card.Img variant="top" src={image} style = {{marginTop: "0.5rem", borderRadius: "10px"}}/>
            <Card.Body>
                <Card.Title>{title} - {price}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button style = {addToCart} onClick = {handleClick}>
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    )
}