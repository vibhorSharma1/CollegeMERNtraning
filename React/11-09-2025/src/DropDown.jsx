import React from 'react'

export default function DropDown() {
    let [city,setCity]=React.useState("Pune");
    let cities=["Pune","Mumbai","Banglore","Chennai","Delhi"];
  return (
    <>
        <h1>DropDown Demo</h1>
        <label htmlFor="city">Select your City</label>
        <select name="city" id="city" onChange={(e)=>setCity(e.target.value)} value={city}>
            {/* <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="banglore">Banglore</option>
            <option value="chennai">Chennai</option>
            <option value="delhi">Delhi</option> */}
            {
                cities.map((c)=><option value={c}>{c}</option>)
            }
        </select>
        <h3>You Select {city}</h3>
    </>
  )
}
