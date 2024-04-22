import React from 'react'

export const BlogList = (props) => {
  return (
    <div>
        <h1>Blog list</h1>
        {
            props.blogs.map((blog)=>{
                return(
                    <ul>
                        <li>ID = {blog.blogId}</li>
                        <li>TITLE = {blog.title}</li>
                        <li>DESCRIPTION ={blog.description}</li>
                        <li>Published Date = {blog.date}</li>
                        
                    </ul>
                )
            })
        }
    </div>
  )
}
