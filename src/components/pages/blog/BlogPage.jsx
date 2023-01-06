import React from 'react'
import BlogCard from '../../blogCard/BlogCard'
import SidebarBlog from '../../SidebarBlog/SidebarBlog'
import './blockPage.css'
import {bd} from "../../../bd"

export default function BlogPage() {
  return (
    <div className='mainWrapper'>
      <SidebarBlog/>
      <div className='containerBlogCards'>
            <ul className='blogCards'>
                {bd("blog").slice(0, 6).map(post => 
                <BlogCard item={post} key={post.id} />
                
                )}
            </ul>
        </div>
    </div>
  )
}
