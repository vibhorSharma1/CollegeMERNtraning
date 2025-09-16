import React from 'react'
import { useState } from 'react'

export default function CheckBox() {
  let [skills,setSkills]=useState([])
  function handleChange(e){
    let value=e.target.value
    let checked=e.target.checked
    if(checked){
      setSkills([...skills,value])
    }
    else{
      let filteredSkills=skills.filter((skill)=>skill!==value)
      setSkills(filteredSkills)
    }
  }
  return (
    <div>

      <label htmlFor="btech">B.tech</label>
      <input type="checkbox"  id='btech' value="Btech" onChange={handleChange}></input>

      <label htmlFor="mtech">Mtech</label>
      <input type="checkbox" id='mtech' value="Mtech" onChange={handleChange}></input>
      <label htmlFor="phd">PHD</label>
      <input type="checkbox"  id='phd' value="Phd" onChange={handleChange}></input>
      <br />
      <h1>You Have Seleted {skills.toString()}</h1>
    </div>
  )
}
