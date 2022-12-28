import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

// const image = new URL("../../image/products/LiraEarrings.png", import.meta.url)

export default function Item({item}) {
    
    return (
        <li className='item'>
            <Link to={"/product"} className=''>
                <div className='containerImage' >
                    <img className='img' src={"./product/"+item.pictures.main+".png"} alt=''/>
                </div>
                <h2>{item.title}</h2>
                <span>${item.price}</span>
            </Link>
        </li>
  )
}

// function returnImage(img){
//     let im = "LiraEarrings"
//     const image = new URL("../../image/products/"+{im}+".png", import.meta.url)
//     // console.log(img)
//     return(image)
// }

//  {/* <img className='img' src={"./LiraEarrings.png"} alt=''/> */}