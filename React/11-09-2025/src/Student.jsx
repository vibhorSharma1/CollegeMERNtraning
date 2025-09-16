import { useState } from "react";
export default function Student() {
    let student = [
        {
            id: 1,
            name: "Amit",
            marks: 80
        },
        {
            id: 2,
            name: "Sumit",
            marks: 70
        },
        {
            id: 3,
            name: "Ramit",
            marks: 60
        },
        {
            id: 4,
            name: "Pankaj",
            marks: 90
        },
        {
            id: 5,
            name: "Ankit",
            marks: 50
        },
        {
            id: 6,
            name: "Sanket",
            marks: 40
        },
        {
            id: 7,
            name: "Manish",
            marks: 30
        }
    ]
 
    

    function handleClick() {
        if (text === "More than 70") {
            setText("Less than 70");
        } else {
            setText("More than 70");
        }
    }
    return (
        <>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <caption>Student Data</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.filter((s)=> 
                        text === "More than 70" ? s.marks >= 70 : s.marks < 70
                        ).map((s) =>{
                            
                              return  <tr>
                                    <td>{s.id}</td>
                                    <td>{s.name}</td>
                                    <td>{s.marks}</td>
                                </tr>
                            
                               
                            }
                          )
                    }
                </tbody>
            </table>
            <button onClick={handleClick} >{text} </button>
        </>
    )
}

export function App(){
    return (
        <>
         <h1>hi</h1>
        </>
    )
}