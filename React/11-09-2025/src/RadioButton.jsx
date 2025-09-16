import React from 'react'

export default function RadioButton() {
    let [gender,setGender]=React.useState("");
  return (
    <>
        <h1>Radio button demo </h1>
           <label htmlFor="male">Male</label>
           <input type="radio" id='male' name="gender" value='male' onChange={(e)=>setGender(e.target.value)}></input>
           <label htmlFor="female">Female</label>
           <input type="radio" id="female" name='gender' value='female' onChange={(e)=>setGender(e.target.value)}></input>

           <h3>You Select  {gender}</h3>
    </>
  )
}
