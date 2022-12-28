import React from 'react'
import Item from '../../item/Item'
import Navbar from '../../navbar/Navbar'
import './shopPage.css'
import {bd} from "../../../bd"

export default function ShopPage() {
  return (
    <div className='mainShop'>
      <Navbar/>
        <div className='productCards'>
        <ul className='goods'>
          {bd().slice(0, 6).map((x) => <Item item={x} key={x.id}/>)}
        </ul>
        </div>
    </div>
  )
}
