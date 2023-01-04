import React from 'react'
import SearchSidebar from '../SearchSidebar/SearchSidebar'
import './SidebarBlog.css'

export default function SidebarBlog() {
  return (
    <>
        <SearchSidebar/>
        <div className='containerBlogCards'>
            <ul className='goods'>
                {bd().slice(0, 6).map((x) => <Item item={x} key={x.id}/>)}
            </ul>
        </div>
    </>
  )
}
