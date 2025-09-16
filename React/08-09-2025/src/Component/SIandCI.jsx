import React from 'react'
import { useState } from 'react'

export default function SIandCI() {
    let [principle, setPrinciple] = useState(0);
    let [rate,setRate] = useState(0);
    let [time,setTime] = useState(0);

    function handleChange(e){
        let value=e.target.value;
        if(/^[0-9]*$/.test(value)){
            setPrinciple(value);
        }
    }
  return (
    <>
        <table>
            <caption>SI and CI Calculation</caption>
            <tbody>
                <tr>
                    <td>Principle</td>
                    <td><input type="text" value={principle} onChange={handleChange} minLength={1}/></td>
                </tr>
                <tr>
                    <td>Rate</td>
                    <td><input type="text" value={rate} onChange={handleChange} minLength={1}/></td>
                </tr>
                <tr>
                    <td>Time</td>
                    <td><input type="text" value={time} onChange={handleChange} minLength={1}/></td>
                </tr>
                <tr>
                    <td>Simple Intrest</td>
                    <td><input type="text" value={principle} /></td>
                </tr>
                <tr>
                    <td>Compound Intrest</td>
                    <td><input type="text" value={principle} /></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
