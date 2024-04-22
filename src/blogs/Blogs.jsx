import React, { useState } from 'react'
import { AddBlog } from './AddBlog'
import { BlogList } from './BlogList'

export const Blogs = () => {
    const [blogs, setblogs] = useState([]) //{},{},{}
    const addBlogToArray = (blog)=>{
        // blogs = [...blogs,blog]
        // setblogs(blogs)
        setblogs([...blogs,blog])
    }
  return (
    <div>
        <AddBlog addBlogToArray = {addBlogToArray}></AddBlog>
        <BlogList blogs = {blogs}></BlogList>
    </div>
  )
}
