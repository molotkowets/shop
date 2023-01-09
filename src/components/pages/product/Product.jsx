import React, { useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import {bd} from '../../../bd'

export default function Product() {
  const product = returnMatch(bd("products"), useParams().id)

  const [mainImg, setMainImg] = useState(product.pictures.main)
  
  const listPictures = [product.pictures.main] 
  product.pictures.additional.map((img) => listPictures.push(img))

  return (
    <div>
      <div className='productBasketAlert'><span><p>The item added to your Shopping bag.</p></span><button>VIEW CART</button></div>
      {/* id:{useParams().id} */}
      {/* <img className='postImg' src={'http://localhost:3000/product/HairPinSetof3.png'} alt=""/> */}
      <div className='product-about'>
        <div className='product-about-left'>
          <div className='wrapperContainerImgButton'>
              <ul className='containerImgButton'>
                {listPictures.map((name, index)=><li key={index} className='wrapperImgButton'><img  className='imgButton' onClick={()=>setMainImg(name)} src={"http://localhost:3000/product/" + name} alt={name}/></li>)}
              </ul>
          </div>
          <div className='containerMainImgSlider'>
            <img className='MainImgSlider' src={"http://localhost:3000/product/" + mainImg} alt=''/>
          </div>      
        </div>
        <div className='product-about-right'>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      </div>
      <div className='tabs'>
        <ul className='tabs-list'>
          <li className='tab'>
            list
          </li>
          <li className='tab'>
            list
          </li>
          <li className='tab'>
            list
          </li>
        </ul>
      </div>
      <div className='SimilarItems'>
        Similar Items
      </div>
    </div>
  )
}

function returnMatch(arr, id){
 
  let prod;
  for(let i=0; i<arr.length; i++ ){
    if(arr[i].id === id){
      prod = i 
      break;
    }else{
      alert("error 404, product not found")
     return(false) 
    }
  }
return arr[prod]
}