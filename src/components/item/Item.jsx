import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { ReactComponent as ShoppingCart } from '../../icon/shopping-cart.svg'
// import { ReactComponent as Eye } from '../../icon/eye_item.svg'
import { ReactComponent as Heart } from '../../icon/heart.svg'

export default function Item({item}) {
    const[img, setImg] = useState(item.pictures.main)
    
    function mouseEnter (){   // при наведенні курсора на карту товару, відображається інша картинка 
        console.log("event hover")
        setImg(item.pictures.additional[0])
       }
       function mouseLeave(){
        setImg(item.pictures.main)
       }
    return (
        <li className='item' onMouseEnter={()=>mouseEnter()} onMouseLeave={()=>mouseLeave()}>
            <Link to={`/product/${item.id}`} className=''>
                <div className='containerImage' >
                    <img className='img' src={"./product/" +  img} alt=''/>
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