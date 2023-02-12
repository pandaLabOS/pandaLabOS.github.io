/*$(document).ready(function() {
    console.log("ready!");
    //load data
    $.ajax({
        url: "data.json",
        context: document.body
    }).done(function (data) {
        //$.(this).addClass("done");
        console.log("Done", data)
        for (let d in data) {
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
            $("customersTable tr:last").after(dataStr)
        }
    })
});
*/

var customers = [
    {
        "name": "Monica Geller",
        "email": "mgeller@friends.com",
        "phone": "0123456789"
    },
    {
        "name": "Rachel Greene",
        "email": "rgreene@friends.com",
        "phone": "0123456789"
    },
    {
        "name": "Phoebe Buffay",
        "email": "pbuffay@friends.com",
        "phone": "0123456789"
    },
    {
        "name": "Ross Geller",
        "email": "rgeller@friends.com",
        "phone": "0123456789"
    },
    {
        "name": "Joey Tribbiani",
        "email": "jtribbiani@friends.com",
        "phone": "0123456789"
    },
    {
        "name": "Chandler Bing",
        "email": "cbing@friends.com",
        "phone": "0123456789"
    }
]

function addCustomerRecord() {

    let newCustomer = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    
    $('#customerTable_body').html("")

    customers.push(newCustomer)
    loadCustomers()
    
}

function deleteCustomer(index) {
    console.log("DELETE",index)
    delete customers[index]
    $('#customerTable_body').html("")
    loadCustomers()
}

function loadCustomers() {
    let allRows = ""
    for (let p in customers) {
        let cellName = `<td class="text-left"><img class='icon' src='../public/remove.png' width = '15px' margin = '5px' onclick='deleteCustomer("${p}")'>` + " " + customers[p].name + "</td>"
        let cellEmail = '<td class="text-right">' + customers[p].email + "</td>"
        let cellPhone = '<td class="text-right">' + customers[p].phone + "</td>"
        console.log(cellName, " ", cellEmail, " ", cellPhone)
        let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
        allRows += row
    }
    $('#customerTable_body').html(allRows)
}