import React from 'react'

function Child(props) {
    return (
        <>
            <div>Name is {props.name}</div>
            <div>Age is {props.age}</div>
            {props.children}
            <button onClick={()=>props.method("Vibhor")}>Click here  to call the parent method</button>
        </>
    )
}

export default Child