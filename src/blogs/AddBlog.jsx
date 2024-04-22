import React, { useState } from 'react'

export const AddBlog = (props) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const titleHandler = (event)=>{

        //console.log(event.target.value)
        settitle(event.target.value)
    }
    const descriptionHandler = (event)=>{
        setdescription(event.target.value)
    }
    const addblog = ()=>{
        // console.log(title)
        // console.log(description)
        var blogObj = {
            title: title,
            description: description,
            date: new Date().toLocaleDateString(),
            blogId: Math.floor(Math.random()*1000)
        }
        console.log(blogObj)
        props.addBlogToArray(blogObj)
    }
  return (
    <div>
        <input type="text" className='form-control' placeholder='Enter Blog Title' onChange={(e)=>{titleHandler(e)}}></input>
        <input type="text" className='form-control' placeholder='Enter Blog Description' onChange={(e)=>{descriptionHandler(e)}}></input>
        <button onClick={()=>{addblog()}} className='btn btn-primary'>ADD BLOG</button>
    </div>
  )
}
