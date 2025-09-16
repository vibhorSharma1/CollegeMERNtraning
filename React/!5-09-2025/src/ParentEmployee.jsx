import React from 'react'
import ThemeToggle from './ThemeToggle'
import ChildEmp from './ChildEmp'

function ParentEmployee() {
    let employees=[
        {id:1,name:"Vibhor",age:24,designation:"Developer"},
        {id:2,name:"Rohit",age:25,designation:"Tester"},
        {id:3,name:"Aman",age:26,designation:"Manager"},    
        {id:4,name:"Sagar",age:27,designation:"Designer"},
        {id:5,name:"Ankit",age:28,designation:"DevOps"},
    ]
  return (
    <>
        <div className="bg-[var(--color-bg-base)] text-[var(--color-text-base)] min-h-screen"> 
            <ThemeToggle/>
        {
            employees.map((emp)=>
              <ChildEmp emp={emp}/>
            )
        }
        </div>
        
    </>
  )
}

export default ParentEmployee