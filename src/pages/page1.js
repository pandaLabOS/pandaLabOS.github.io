import * as React from 'react'
const colours = ["White", "Black", "Red", "Green", "Blue"]
const nums = [3,5,6,12,23,4,6,4,7,8,23]

const data = [
    {name: "Jack", salary: 10000},
    {name: "Jill", salary: 15000},
    {name: "John", salary: 10500},
]

function myReduceFunc(previous, current, index){
    return previous + current
}

function Page1() {
    let str = []

    for (let i = 0; i < colours.length; i++) {
        str.push(<li>{colours[i]}</li>)
    }

    function mapFunc (value, index){
        return <li>{value}</li>
    }
    

    let items = colours.map((value, index) => <li>{value}</li>)

    // let sum = nums.reduce(myReduceFunc, 0)

    // let empList = []
    // let salaries = 0

    // for (let e = 0; e < data.length; e++) {
    //     empList.push(<li>{data[e].name} {data[e].salary}</li>)
    //     salaries += data[e].salary
    // }

    let empList = data.map(data => <li>{data.name} {data.salary}</li>)
    let salaries = data.reduce((p,c) => p + c.salary, 0)


    return (
        <div>
            <h1>Hello</h1>
            <p>How are you?</p>
            <ul>
                {empList}
                Total salaries = {salaries}
            </ul>
        </div>
        
    )
}

export default Page1