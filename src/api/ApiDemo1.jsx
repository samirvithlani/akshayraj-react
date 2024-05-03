import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [users, setusers] = useState([])
    const getApiDemo1 = async () => {
        //api -->data

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("res",res)
        console.log("res.data.message",res.data.message)
        console.log("res.data.data",res.data.data)
        setusers(res.data.data)


    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiDemo1()}}>GET</button>
        <ul>
        {
            users?.map((user)=>{
                return(
                    <li>
                        {user._id} - {user.name} - {user.email}
                    </li>
                )
            })
        }
        </ul>

    </div>
  )
}
