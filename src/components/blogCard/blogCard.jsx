import React from 'react'
import { NavLink } from 'react-router-dom'
import './blogCard.css'


export default function BlogCard(props) {
  console.log(props.item.pictures.main)
  return (

    <li className='blogCard'>
      <div className='blogImgContainer'>
        <img src={"http://localhost:3000/blog/"+props.item.pictures.main} alt="" />
      </div>
      <p className='dataBlog'>{props.item.data}</p>
      <h3 className='titleBlogCard'>{props.item.title}</h3>
      <p className='blogCartDescription'>{props.item.description}</p>
      <NavLink to={`/post/${props.item.id}`}><div className='buttonReadMore'>Read More</div></NavLink>
    </li>
  
    )
}