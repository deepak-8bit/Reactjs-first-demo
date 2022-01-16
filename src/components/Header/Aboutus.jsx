import React, { useState } from 'react'

export default function Aboutus() {
    const[count,setCount]=useState(0)
    function decrement(){
        setCount(count-1)
    }
    return (
        <div>
            <h1>this is about component</h1>
            <h1>{count}</h1>
            <button onClick={(decrement)}> decrement</button>
        </div>
    )
}
