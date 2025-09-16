import React from 'react'
import Child from './Child'

function Parents() {
    function show(prop){
        alert("hello "+prop)
    }
    return (
        <>
            <div className='text-background'>
                <div className='text-sidebar-border'>We are going to learn props</div>
                <Child name="Ram" age="18" method={show}>
                    <div>
                        <h4 className='text-amber-200'>We are in Parents Component</h4>
                        <h1>Welcome to India</h1>
                        <button>Click here</button>
                    </div>
                </Child>
            </div>
        </>
    )
}

export default Parents