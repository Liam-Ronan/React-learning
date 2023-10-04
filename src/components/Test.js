import React from "react";

const names = ['liam', 'ellie', 'amy']

const printName = () => {
    return (
        <ul>
            {names.map((name,i) => {
                return <li key={i}>The {name} is {name.length} characters in length</li>
            })}
        </ul>
    )
}

const Test = () => {
    return <div>{printName()}</div>
}

export default Test