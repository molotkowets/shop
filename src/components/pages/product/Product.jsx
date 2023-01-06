import React from 'react'
import './product.css'

export default function Product() {
  const htmlTest = <div className="test">text</div>
  return (
    <div>Product
      {htmlTest}
      {/* <img className='postImg' src={'http://localhost:3000/product/HairPinSetof3.png'} alt=""/> */}
    </div>
  )
}
