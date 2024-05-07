import React, { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setcount] = useState(0)

    useEffect(()=>{
        console.log("USE EFFECT CALLED")
        
    },[count])
    //[] -->dependency array
    //[]-->empty array it will call only once after the first render


  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        {count}
        <button onClick={()=>{setcount(count+1)}}>CLICK ME</button>
    </div>
  )
}
