var productList = [
    {
        name: "Product A",
        quantity: 1,
        value: 500,
        discount: 0
    },
    {
        name: "Product B",
        quantity: 3,
        value: 750,
        discount: 150
    },
    {
        name: "Product C",
        quantity: 25,
        value: 30,
        discount: 50
    }
]

function addToCart() {

    let newItem = {
        name: $('#productSelection').val(), //$('#<id of element you are fetching data from>)
        quantity: Number($('#quantity').val()),
        value: Number($('#value').val()),
        discount: Number($('#discount').val())
    }
    
    $('#tableBody').html("")

    //If newItem['name'] already exists in productList, check price
    //If newItem['name'] and newItem['price'] are already present, update productList[item][quantity]

    //REF: const index = Data.findIndex(item => item.name === 'John'); findIndex returns -1 if none is found

    indexOfName = productList.findIndex(product => product.name === newItem['name'])

    if (indexOfName === -1) { //If in array
        productList.push(newItem)
    }
    else {
        if (productList[indexOfName].value == newItem['value']) { //If price = existing
            productList[indexOfName].quantity += Number(newItem['quantity']) //Update
            productList[indexOfName].discount += Number(newItem['discount']) //Update
        }
        else {
            productList.push(newItem)
        }
    }

    loadProducts()
    console.log("ADD")
    const inputs = document.querySelectorAll('#quantity, #value, #discount');

    inputs.forEach(input => {
        input.value = '';
    });
    
}

function deleteProduct(index) {
    console.log("DELETE",index)
    delete productList[index]
    $('#tableBody').html("")
    loadProducts()
}


function clearCart() {
    $('#tableBody tr').remove()
    productList = []
    $("#gross").html(0)
    $("#totalDiscount").html(0)
    $("#vat").html(0)
    $("#net").html(0)
    console.log("Cleared table")
}

function loadProducts() {
    let allRows = ""
    let gross = 0
    let totalDiscount = 0
    console.log(typeof totalDiscount)
    for (let p in productList) {
        let cellDel = `<td class = "l-border"><img src='public/cancel.png' width = '15px' onclick='deleteProduct("${p}")'></td>`
        let cellName = `<td class="text-left">` + productList[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + productList[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + productList[p].value + "</td>"
        let celldiscount = '<td class="text-right">' + productList[p].discount + "</td>"
        
        totalDiscount += productList[p].discount

        let total = (productList[p].value * productList[p].quantity) - productList[p].discount
        let cellTotal = '<td class="text-right r-border">' + total + "</td>"

        let row = `<tr>${cellDel}${cellName}${cellQuantity}${cellPPU}${celldiscount}${cellTotal}</tr>`
        allRows += row

        gross += total
    }

    $('#tableBody').html(allRows)

    $("#gross").html(gross.toFixed(2))
    $("#totalDiscount").html(totalDiscount.toFixed(2))

    let vat = gross * 0.07
    let net = gross + vat

    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}