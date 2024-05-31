import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/BankSclice'

export const BankComponent = () => {
    const [deposit, setdeposit] = useState(0)

    const dispatch = useDispatch()
    const depositHandler = () => {
        console.log("deposit...",deposit) //action///
        dispatch(depositAction(parseInt(deposit)))

    }
  return (
    <div>
        <h1>BankComponent</h1>
        <input onChange={(e)=>{setdeposit(e.target.value)}} type="text" placeholder="Enter Deposit amount."/>
        <br></br>
        <button onClick={()=>{depositHandler()}} className="btn btn-primary">Deposit</button>
    </div>
  )
}
