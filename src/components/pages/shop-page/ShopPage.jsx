import React from 'react'
import Item from '../../item/Item'
import Sidebar from '../../sidebarShop/SidebarShop'
import './shopPage.css'
import {bd} from "../../../bd"

export default function ShopPage() {
  return (
    <div className='mainShop'>
      <Sidebar/>
        <div className='productCards'>
          <ul className='goods'>
            {bd().slice(0, 6).map((x) => <Item item={x} key={x.id}/>)}
          </ul>
        </div>
    </div>
  )
}
