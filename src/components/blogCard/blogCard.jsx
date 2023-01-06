import React from 'react'
import { NavLink } from 'react-router-dom'
import './blogCard.css'


export default function BlogCard(props) {
  console.log(props.item.pictures.main)
  return (

    <li>
      <div className='blogImgContainer'>
        <img src={"http://localhost:3000/blog/"+props.item.pictures.main} alt="" />
      </div>
      
      <NavLink to={`/blog/${props.item.id}`}>{props.item.title}</NavLink>
    </li>
  
    )
}