import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../redux/ContentSlice'

export const ContentComponnet = () => {

    const isLoadig = useSelector((state)=>state.content.isLoading)
    const isError = useSelector((state)=>state.content.isError)
    const content = useSelector((state)=>state.content.content)
    const dispatch = useDispatch()

    console.log("content...",content)
    console.log("isLoadig...",isLoadig)
    console.log("isError...",isError)
    

    useEffect(() => {
        
        dispatch(fetchContent())
    
    }, [])
    

  return (
    <div>
        <h1>CONTENT COMPONENT</h1>

    </div>
  )
}
