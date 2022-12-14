var christmasSack = [
    {
        name: "Samsung Smart Monitor M8",
        quantity: 1,
        value: 19900
    },
    {
        name: "Xiaomi Handheld Steam Iron",
        quantity: 2,
        value: 629
    },
    {
        name: "iPhone 14 Pro Max",
        quantity: 1,
        value: 50000
    },
    {
        name: "Sony WH-1000XM5",
        quantity: 1,
        value: 13490
    }
]

function addToSack() {

    let newGift = {
        name: $('#christmasSack').val(),
        quantity: $('#quantity').val(),
        value: $('#value').val()
    }

    if ($('#quantity').val() === null || $('#quantity').val() === 0) {
        (newGift[quantity]) = 1;
    }

    console.log(typeof quantity);
    console.log(typeof value);
    
    $('#presentsBody').html("")

    christmasSack.push(newGift)
    loadPresents()
    
}

function deletePresent(index) {
    console.log("DELETE",index)
    delete products[index]
    $('#productBody').html("")
    loadData()
}

function loadPresents() {
    let allRows = ""
    let gross = 0
    for (let p in christmasSack) {
        let cellName = `<td class="text-left"><img class='icon' src='public/remove.png' width = '15px' onclick='deleteProduct("${p}")'> ` + christmasSack[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + christmasSack[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + christmasSack[p].value + "</td>"
        let total = christmasSack[p].value * christmasSack[p].quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $('#presentsBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}