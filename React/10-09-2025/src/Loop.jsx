import React from 'react'

export default function() {
    let array=[1,2,3,4,5]
  return (
    <div>
        {
            array.map((e)=>
                e
            )
        }
    </div>
  )
}
