import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import WineCard from '../../components/WineCard.js'
import { useLocalStorage } from 'react-use'

const dummyPrice = Number(950)
let total = []

export default function PosPage() {
    const [wine, setwine] = useLocalStorage('wine', 'Cabernet Sauvignon')

    let [wineTitles, setwineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    let [cart, setCart] = useLocalStorage('cart', [])
    let [localData, setLocalData] = React.useState('XXX')

    function addToCart(wine) {
        cart.push(wine)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    wines[i].price = dummyPrice
                    items.push (
                        <WineCard
                            key = {i}
                            image = {wines[i].image}
                            winery = {wines[i].winery}
                            title = {wines[i].wine}
                            location = {wines[i].location}
                            price = {wines[i].price}
                            averageRating = {wines[i].rating.average}
                            reviews = {wines[i].rating.reviews}
                            handleClick = {() => {addToCart(wines[i])}}
                        />
                    )
                }
                setwineTitles(items)
            })
    }, [subMenu])

    return (
        <Container>
            <h1 style = {{color: "#720017"}}>Wine</h1>
            <ButtonGroup>
                <Button style = {{backgroundColor: "#720017", border: "#FFFFFF"}} variant="secondary" onClick={() => setSubMenu('reds')}>Reds</Button>
                <Button style = {{backgroundColor: "#720017", border: "#FFFFFF"}} variant="secondary" onClick={() => setSubMenu('whites')}>Whites</Button>
                <Button style = {{backgroundColor: "#720017", border: "#FFFFFF"}} variant="secondary" onClick={() => setSubMenu('sparkling')}>Sparkling</Button>
                <Button style = {{backgroundColor: "#720017", border: "#FFFFFF"}} variant="secondary" onClick={() => setSubMenu('rose')}>Rose</Button>
                <Button style = {{backgroundColor: "#720017", border: "#FFFFFF"}} variant="secondary" onClick={() => setSubMenu('dessert')}>Dessert</Button>
            </ButtonGroup>
            <Row>
                <Col sm = {8}><Row>{wineTitles}</Row></Col>
                <Col sm = {4}>
                    <Row>
                        <h2>Cart</h2>
                    </Row>
                    {cart.map(item => {
                        return (
                            <Row>
                                <Col sm = {1}></Col>
                                <Col>{item.wine} - {dummyPrice}</Col>
                            </Row>
                        )
                    })}
                    <Row>
                        <Col><b>Total: {cart.reduce((a, b) => a + b.price, 0)}</b></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}