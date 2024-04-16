import React, { useState } from 'react'

export const UseStateDemo = () => {

//    var count = 0;
//count is variable and it is not reactive
//setCount is function and it is reactive
//0 is initial value of count
const [count,setCount] = useState(0);
//object usestate({})
//array usestate([])
//string usestate('')
//boolean usestate(false)
    const increseCount = () => {
        setCount(count+1);
        console.log(count);
    }

  return (
    <div>
        <h1>count = {count}</h1>
        <button onClick={()=>{increseCount()}}>increse count</button>
    </div>
  )
}
