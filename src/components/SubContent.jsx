import React from 'react'

export const SubContent = (props) => {

    console.log("sub content component.. props..",props)
  return (
    <div>
        <h1>SUB CONTENT</h1>
        <p>{props.t}</p>
    </div>
  )
}
