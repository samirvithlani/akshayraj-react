import React from 'react'
import "../assets/css/header.css"

export default function HeaderComponent(props) {
  //{title:"d..."}
  console.log("header component.. props..",props)
  return (
    <div className='header'>
        <h1>Header Component</h1>
        <br></br>
        <h6> --- {props.title}</h6>
    </div>
  )
}
