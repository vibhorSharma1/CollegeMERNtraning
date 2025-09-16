import React from 'react'

export default function CHildIntrest(props) {
    let {principle,rate,time}=props
    console.log(props)
    
  return (
    <>
        <button onClick={()=>props.siMethod(principle,rate,time)}>Calculate the Simple Intrest</button>
        <button onClick={()=>props.ciMethod(principle,rate,time)}>Calculate the Compound Intrest</button>
    </>
  )
}
