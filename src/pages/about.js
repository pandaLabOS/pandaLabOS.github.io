import React, {useRef, useState} from "react"

var products = [
    {name: "Samsung TV", price: 20000, type: "gadget"},
    {name: "Sony WH1000XM5", price: 12345, type: "gadget"},
    {name: "Sony VPL-XW5000ES", price: 190693, type: "gadget"},
]

function AboutPage() {
    let nameRef = useRef()
    let priceRef = useRef()
    let [productState, setProductState] = useState([])

    let total = 0;

    for (let p in products) {
        total += products[p].price
    }

    function addProduct() {
        let newName = nameRef.current.value
        let newPrice = priceRef.current.value
        //alert("Add Product " + newName + " " + newPrice)
        products.push({
            name: newName, price: newPrice
        })
        console.log(products)
        setProductState([...productState])
    }

    function deleteProduct(index) {
        productState.splice(index, 1)
        setProductState([...productState])
    }

    return (
        <main>
            <h1>Order Summary</h1>

            <div>
                <div>
                    Name: <input type = "text" id = "name" ref = {nameRef}/> {" "}
                    Price: <input type = "text" id = "price" ref = {priceRef}/> {" "}
                    <button onClick = {addProduct}>+ ADD</button>
                </div>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>Name</th><th>Price</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr>
                                <td><button onClick={()=>deleteProduct(index)}>Delete</button></td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                        <td>Total</td>
                        <td>{total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}

export default AboutPage