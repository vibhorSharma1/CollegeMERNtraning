import React, { useState } from "react";
export default function Card(){
    let [Array,setArray]=useState([1,2,3,4,5,6,7,8,9,10]);
    function addItem(){
        setArray([...Array,11]);

    }
    return(
        <>
        <div>
            <h2>{Array.map((item,index)=><li key={index} data-testid="list item">{item}</li>  )}</h2>
            <button onClick={addItem}>Add Item</button>
        </div>
        </>
    )
}