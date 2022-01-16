import React, { useState } from 'react'

export default function Home() {

    const [count,setCount]=useState(0)

    function increment(){
        setCount(count+1)
    }

   
    return (
        <div>
           
             <h1>this is home component</h1>
             <h1>{count}</h1>
             <button onClick={increment}>increment</button><br/>
                   </div>
    )
}
