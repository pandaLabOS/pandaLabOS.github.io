import * as React from 'react'
import {useState, useEffect} from 'react'

export default function Coffee() {
    let items = []
    let [wineTitles, setwineTitles] = React.useState([])

    const header = {
        textAlign: "center",
        alignItems: "center",
        marginTop: "5px",
        backgroundColor: "#FCEDDC",
        fontSize: "30px"
    }

    const mainStyle = {
        backgroundColor: "#BE3455"
    }

    const cardStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",

        marginTop: "1.5rem",
        marginRight: "1rem",
        backgroundColor: "#FCEDDC",
        borderRadius: "10px",
        padding: "1rem",

        height: "405px"
    }

    const description = {
        display: "flex",
        flexDirection: "column",
        fontSize: "24px"
    }

    const title = {
        colour: "#FCEDDC",
        fontSize: "45px",
        marginLeft: "15px",
        marginRight: "15px"
    }

    React.useEffect(async () => {
        console.log("Hello")
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
            
        for (let i = 0; i < wines.length; i++) {
            items.push (
                <div style = {cardStyle}>
                    <img style = {{borderRadius: "5px"}} src = {wines[i].image}/>
                    <div style = {{marginLeft: "1rem"}}>
                        <h2 style = {{fontSize: "28px"}}>{wines[i].wine}</h2>
                        <div style = {description}>
                            <div><b>Winery: </b>{wines[i].winery}</div>
                            <div><b>Rating: </b>{wines[i].rating.average}</div>
                            <div><b>Reviews: </b>{wines[i].rating.reviews}</div>
                            <div><b>Location: </b>{wines[i].location}</div>
                        </div>
                    </div>
                    
                </div>
            )
        }
        setwineTitles(items)

    }, [])

    return (
        <div>
            <div style = {mainStyle}>
                <h1 style = {{textAlign: "center", color: "#FCEDDC", fontSize: "64px"}}>WINES</h1>
                <ul>
                    {wineTitles}
                </ul>
            </div>
        </div>
    )
}