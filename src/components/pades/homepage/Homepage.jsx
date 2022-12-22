import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export default function Homepage() {
  return (
    <>
        <div className='presentation'>
          <h1>Gold big hoops </h1>
          <p>$ 68,00</p>
          <button className='btn-product'>View Product</button>
        </div>
        <div className='headStore'>
          <h2>Shop The Latest</h2>
          <Link to={"/shop"} className='btnViveAll'>View All</Link>
        </div>
    </>
  )
}
