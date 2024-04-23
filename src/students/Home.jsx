import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div  style={{backgroundColor:"grey",height:"200px",marginTop:"10px"}}>
        <h1>HOME COMPONENT</h1>
        <ul>
          <li>
            <Link to="/home/detail/1">HOME 1</Link>
          </li>
          <li>
            <Link to="/home/detail/2">HOME 2</Link>
          </li>
          <li>
            <Link to="/home/detail/3">HOME 3</Link>
          </li>
          <li>
            <Link to="/home/detail/samirvithlani">HOME 3</Link>
          </li>
        </ul>
    </div>
  )
}
