import React, { useState } from 'react'

export default function First({name,email}) {
    let [useName,setName]=useState(name)
    let [count,setCount]=useState(0)
  return (
    <>
       <div className='text-3xl'>Your name is {useName} and Email ={email}</div>
       <p className='text-2xl flex'>Hello <h2 className='text-5xl font-bold'>{useName}</h2></p>
       <button className='border-2 border-blue-400' onClick={()=>setName("Rohit")}>Click me </button>
       <h1>hello {useName}</h1>
         <h1>Count is {count}</h1>
         <button className='border-2 border-blue-400' onClick={()=>setCount(count+1)}>Increment</button>
    </>
    
  )
}

