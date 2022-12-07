var products = [
    {
        name: "Samsung Smart Monitor M8",
        quantity: 1,
        ppu: 19900
    },
    {
        name: "Xiaomi Handheld Steam Iron",
        quantity: 2,
        ppu: 629
    },
    {
        name: "iPhone 14 Pro Max",
        quantity: 1,
        ppu: 50000
    },
    {
        name: "Sony WH-1000XM5",
        quantity: 1,
        ppu: 13490
    }
]


//for (var...) will be available outside of the function as well
//for (let...) will be available only at function-level scope
function loadData() {
    let productList = document.getElementById("productList")
    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name
    
        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-center")
    
        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")
    
        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text-right")

        gross += products[p].ppu * products[p].quantity
    
        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }
    let myName = document.getElementById("myName")
    myName.innerHTML = "Christmas List"
    
    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross.toFixed(2)
    
    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)

}