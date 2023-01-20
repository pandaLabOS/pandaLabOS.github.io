import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';

export default function WineCard(props) {
    const {image, title, description, winery, location, price, averageRating, reviews, handleClick} = props;

    const addToCart = {
        backgroundColor: "#720017",
        color: "white",
        border: "1px #720017 solid",
        fontSize: "1em",
        display: "flex", 
        alignItems: "center"
    }
    
    return (
        <Card style={{width: '25rem', margin: '5px', display: "flex", flexDirection: "row", border: "1px #720017 solid"}}>
            <Card.Img variant="top" src={image} style = {{marginTop: "0.5rem", borderRadius: "10px", maxWidth: "150px"}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price} THB</Card.Text>
                <Card.Text>Winery: {winery}</Card.Text>
                <Card.Text>{location}</Card.Text>
                <Card.Text>{averageRating} ({reviews} reviews)</Card.Text>
                <Button style = {addToCart} onClick = {handleClick}>
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    )
}