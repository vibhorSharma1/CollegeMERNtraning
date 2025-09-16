import React, { useState } from 'react'
import image from "./Image/rdec.png"

function Assignement() {
    let [count,setCount]=useState(0);
    let[color,setColor]=useState("white");
  return (
    <>
       <div className="max-w-sm bg-[{color}] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
  {/* Image */}
  <div className="h-48 w-full overflow-hidden">
    <img
      src={image}
      alt="College"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Content */}
  <div className="p-4">
    <h1 className="text-xl font-bold text-gray-900">RD Engineering College</h1>
    <p className="text-gray-600 text-sm mt-1">
      bkr cllg hai mt aao yrr 😭😭😭😭😭
    </p>
  </div>

  {/* Footer / Button */}
  <div className="px-4 pb-4">
    <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
       onClick={()=>setCount(count+1)}>
      Image Viewed {count}
    </button>
  </div>
</div>

    </>
  )
}

export default Assignement