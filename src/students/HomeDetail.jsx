import React from 'react'
import { useParams } from 'react-router-dom'

export const HomeDetail = () => {
    const id = useParams().id
    
  return (
    <div>HomeDetail
        <h1>ID = {id}</h1>
    </div>
  )
}
