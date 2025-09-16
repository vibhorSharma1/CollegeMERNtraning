import { useState } from 'react'

import './App.css'

function App() {
  function add(a, b) {
    let c = +a + +b
    // alert(c)
    setResult(c)
  }
  let [fno, setFno] = useState(0)
  let [sno, setSno] = useState(0)
  let [result, setResult] = useState(0)
  return (
    <>
      <div className='container'>
        <div> 
          <label htmlFor="firstNumber">Enter the First Number</label>
          <input type="text" name="FirstNumber" id="firstNumber" placeholder={fno} onChange={(e) => setFno(e.target.value)} />
        </div>
        <div>
          <label htmlFor="secondNumber">Enter the Second Number</label>
          <input type="text" name="SecondNumber" id="secondNumber" placeholder={sno} onChange={(e) => setSno(e.target.value)} />
        </div>
        <div>
          <label htmlFor="result">Result</label>
          <input type="text" name="result" id="result" placeholder={result} onChange={(e) => setResult(e.target.value)} />
          <br />
          <button onClick={() => add(fno, sno)}>Add</button>
        </div>
      </div>
    </>
  )
}

export default App
