import React from 'react'

function ChildEmp(props) {
    let emp=props.emp
  return (
    <>
        <div>
                <div  className='border-2 m-5 w-150 rounded-2xl'>
                    <div className='  p-3 rounded-t-2xl'>
                        <p>Id:{emp.id}</p>
                    <p>Name:{emp.name}</p>
                    <p>Designation:{emp.designation}</p>
                    </div>
                </div>
              </div>

    </>
  )
}

export default ChildEmp