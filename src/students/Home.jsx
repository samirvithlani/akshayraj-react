import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  var data = [
    {
      id: 5,
      name:"Home 5"
    },
    {
      id: 6,
      name:"Home 6"
    },
    {
      id: 7,
      name:"Home 7"
    }
  ]
  return (
    <div>
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

<ul>
        {
          data.map((d)=>{
            return(
              <li>
                <Link to={`/home/detail/${d.id}`}>{d.name}</Link>
              </li>
            )
          })
        }
        </ul>
    </div>
  )
}
