import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

    const getApiDemo1 = async () => {
        //api -->data

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("res",res)
        console.log("res.data.message",res.data.message)
        console.log("res.data.data",res.data.data)


    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiDemo1()}}>GET</button>

    </div>
  )
}
