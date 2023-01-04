import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { ReactComponent as ShoppingCart } from '../../icon/shopping-cart.svg'
// import { ReactComponent as Eye } from '../../icon/eye_item.svg'
import { ReactComponent as Heart } from '../../icon/heart.svg'

export default function Item({item}) {
    const[img, setImg] = useState('')
    
    function mouseEnter (){
        // boxRef.current.style.height = "50px" 
        console.log("event hover")
        setImg('-1')
       }
       function mouseLeave(){
        setImg('')
       }
    return (
        <li className='item' onMouseEnter={()=>mouseEnter()} onMouseLeave={()=>mouseLeave()}>
            <Link to={"/product"} className=''>
                <div className='containerImage' >
                    <img className='img' src={"./product/" + item.pictures.main + img + ".png"} alt=''/>
                </div>
                <h2>{item.title}</h2>
                <span>${item.price}</span>
            </Link>
            <div className='hoverItem'>    
                <button className='buttonContainerIcon'><Heart onClick={()=>addProductTo("Heart")} className='iconItemHover'/></button>
                <button className='buttonContainerIcon'><ShoppingCart onClick={()=>addProductTo("ShoppingCart")} className='iconItemHover'/></button>
                {/* <Eye onClick={()=>addProductTo("Eye")} className='iconItemHover'/> */}
            </div>
        </li>
  )
}
function addProductTo(parameter){
    console.log(parameter)
}
// function returnImage(img){
//     let im = "LiraEarrings"
//     const image = new URL("../../image/products/"+{im}+".png", import.meta.url)
//     // console.log(img)
//     return(image)
// }

//  {/* <img className='img' src={"./LiraEarrings.png"} alt=''/> */}