import * as React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Coffee() {
    let items = []
    let [coffeeTitles, setCoffeeTitles] = React.useState([])
   
    const mystyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start"
      };

    React.useEffect(async () => {
        console.log("Hello")
        let res = await fetch('https://api.sampleapis.com/coffee/hot')
        let coffees = await res.json()
            
        for (let i = 0; i < coffees.length; i++) {
            console.log(coffees[i])
            console.log(coffees[i].title)
            items.push (
                <div style = {mystyle}>
                    <img style = {{width:"10%"}} src = {coffees[i].image}/>
                    <div style = {{marginLeft: "1rem"}}>
                        <h1>{coffees[i].title}</h1>
                        <p>{coffees[i].description}</p>
                    </div>
                    
                </div>
            )
        }
        setCoffeeTitles(items)

    }, [])

    return (
        <>
            <h1>Coffee</h1>
            <ul>
                {coffeeTitles}
            </ul>

        </>
    )
}