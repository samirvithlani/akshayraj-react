import React from 'react'
import { SubContent } from './SubContent'

export const Content = (props) => {
    console.log("content component.. props..",props)
    
    
  return (
    <div>
        <h1>{props.t}</h1>
        <p style={{color:props.s.color,fontSize:props.s.fontSize}}>{props.s.color}</p>
        <h4>PROPS DRILLING</h4>
        <SubContent t = {props.t}></SubContent>
    </div>
  )
}
